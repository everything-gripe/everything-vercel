import handler from "../../util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 25)
    const page = request.query.after
    const subreddit =  request.query.subreddit
    const sort = request.query.where
    const secondarySort = request.query.t

    return await service.getPosts({limit, page, sort, secondarySort, subreddit});
})
