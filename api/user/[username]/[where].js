import handler from "../../util";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 25)
    const page = request.query.after
    const userDetail = request.query.where?.toLowerCase()
    const username = request.query.username
    const sort = request.query.sort
    const secondarySort = request.query.t

    return await service.getUserDetails({limit, page, sort, secondarySort, userDetail, username})
})
