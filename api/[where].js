import handler from "./util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 25)
    const page = request.query.after
    const sort = request.query.where
    const secondarySort = request.query.t

    return await service.getPosts({limit, page, sort, secondarySort});
})
