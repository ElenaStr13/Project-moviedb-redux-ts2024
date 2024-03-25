import {IRes} from "../types";
import {ISomeData} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (text: string): IRes<ISomeData> => apiService.get(`${urls.search}${text}`)
}

export {searchService}