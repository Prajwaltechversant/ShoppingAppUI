import axios from 'axios';


export const commonAPI = async (httpRequest, url, reqBody) => {

    let reqConfig = {
        method: httpRequest,
        url: url,
        data: reqBody,
        headers: { "Content-Type": "application/json" },
        
    }

    try{
        const response = await axios(reqConfig)
        return response
    }
    catch(err){
        console.log(err)
        throw err;
    }
    // await axios(reqConfig).then((result) => {
    //     console.log(result)
    //     return result;
    // }).catch((err) => {
    //     return err;
    // })

}
