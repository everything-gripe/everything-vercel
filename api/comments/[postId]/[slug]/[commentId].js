import handler from "../../../util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 25)
    const depth = request.query.depth
    const group = request.query.group
    const sort = request.query.sort

    //TODO: Add context param
    return await service.getNestedComments({
        ids: {
            postId: request.query.postId,
            commentId: request.query.commentId
        },
        limit,
        depth,
        sort,
        group
    })
})
