import handler from "../util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 5)
    const query =  request.query.query

    return await service.getGroupsQuery({limit, query});
})
