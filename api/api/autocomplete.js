import handler from "../util";
import {SearchType, Unimplemented} from "everything-sdk";

export default handler(async function (request, response, service) {
    const limit = Number(request.query.limit ?? 5)
    const query =  request.query.query
    const includeOver18 = request.query.include_over_18
    const searchType = request.query.include_profiles ? [SearchType.Group, SearchType.User] : SearchType.Group
    const v2 = !!request.query.v2

    let autocompleteResponse = await service.autocomplete({limit, query, includeOver18, searchType});
    autocompleteResponse = v2 || autocompleteResponse instanceof Unimplemented ? autocompleteResponse : autocompleteResponse.data.toAutocompleteV1()

    return autocompleteResponse
})
