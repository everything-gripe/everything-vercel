import handler from "../util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 25)
    const depth = request.query.depth
    const group = request.query.group
    const sort = request.query.sort

    return await service.getNestedComments({
        ids: {
            postId: request.query.postId
        },
        limit,
        depth,
        sort,
        group
    })
})
