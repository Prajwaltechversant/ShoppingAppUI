import { getCountryAPI, getStateAPI } from "./baseURL"
import { commonAPI } from "./commonAPI"




export const getCountryFromAPI = async () => {
    return await commonAPI("GET", getCountryAPI, "", "")
}



export const getStatesFromAPI = async (countryid) => {
    return await commonAPI("POST", `${getStateAPI}/?countryid=${countryid}`,countryid , "")
}