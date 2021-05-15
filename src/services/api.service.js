import axios from "axios";

let link = {
    baseURL: "https://api.sampleapis.com/futurama"
}

let axiosInstance = axios.create(link)

async  function getChars() {
    return await axiosInstance.get('/cast')
}

async  function getInventory() {
    return await axiosInstance.get('/inventory')
}

export {getChars, getInventory,axiosInstance}