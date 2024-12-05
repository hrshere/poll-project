import ApiConstants from "../utils/apiConstants"

export const fetchDashBoard = async() => {
try{
    console.log(localStorage.getItem('token'));
    var response = await fetch(ApiConstants.baseURL+ApiConstants.dashboard, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    response = response.json()
    return response;
}
catch(error){
    throw error;
}
}