import handler from "./util";

export default handler(async function (request, response, service) {
    return await service.getGroup({group: request.query.group})
})
