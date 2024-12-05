import ApiConstants from "../utils/apiConstants"

export const userLogin = async (userCred) => {
    console.log(userCred);
    try{
        var response = await fetch(ApiConstants.baseURL+ApiConstants.login, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(userCred)
        })
        return response;
    }
    catch(error){
        throw error;
    }
};