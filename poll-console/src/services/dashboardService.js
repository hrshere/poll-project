import ApiConstants from "../utils/apiConstants"

export const fetchDashBoard = async() => {
    var response = await fetch(ApiConstants.baseURL+ApiConstants.dashboard, {
        headers: {
            'Authorization': "Bearer "
        }
    })
    response = response.json()
}