import handler from "./util";
import {Everything} from "everything-sdk";

export default handler(async function (request, response, service) {
    const query = request.query.q
    const limit = Number(request.query.limit ?? 25)
    const page = request.query.after
    const sort = request.query.sort
    const secondarySort = request.query.t
    const searchType = request.query.type?.includes(',')
        ? request.query.type.replaceAll(/\s/g, '').split(',')
        : request.query.type
    const searchInGroup = !Array.isArray(searchType) && request.query.restrict_sr
    const group = request.query.group
    
    if (!searchType) return Everything.list({dist: 0})
    
    return await service.search({query, limit, page, sort, secondarySort, searchType, group, searchInGroup});
})