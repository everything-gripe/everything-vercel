import {IService, Unimplemented} from "everything-sdk";
import {createEvent, getHeader, getRequestURL, H3Event} from "h3"
import LemmyService from "lemmy-for-everything"
import KbinService from "kbin-for-everything"

const services = {lemmy: LemmyService, kbin: KbinService}

if (!process.env.VERCEL_ENV) {
    require('dotenv').config()
}

/**
 *
 * @param handler {function(import("@vercel/node").VercelRequest, import("@vercel/node").VercelResponse, IService)}
 * @returns {(function(import("@vercel/node").VercelRequest, import("@vercel/node").VercelResponse): Promise<void>)}
 */
export default function handler(handler) {
    return async function (request, response){
        const event = createEvent(request, response)
        const service = await getService(event)
        const result = await handler(request, response, service)

        if (result instanceof Unimplemented) {
            response.status(result.status)
        }

        response.json(result)
    }
}

/**
 * @param event {H3Event}
 * @returns {Promise<IService>}
 */
async function getService(event) {
    const requestUrl = getRequestURL(event)
    const hostParts = requestUrl.hostname.split('.')
    const serviceName = hostParts[hostParts.length - 3] || requestUrl.searchParams.get('everything-service')

    const ip = event.node.req.connection.remoteAddress
    const userAgent = getHeader(event, 'user-agent')
    let forwardedFor = getHeader(event, 'x-forwarded-for')
    forwardedFor = forwardedFor && ip ? `${forwardedFor}, ${ip}` : ip;
    let realIp = getHeader(event, 'x-real-ip');
    realIp = realIp || ip;

    const serviceOptions = {
        headers: {
            "user-agent": userAgent,
            "x-forwarded-for": forwardedFor,
            "x-real-ip": realIp
        }
    }

    return new services[serviceName]().init(serviceOptions)
    // const imported = await import(`${serviceName}-for-everything`)
    // return new (imported.default?.default || imported.default)()
}
