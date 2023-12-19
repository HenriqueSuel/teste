import axios, { AxiosResponse } from "axios";


const getApi = <T>(url: string): Promise<AxiosResponse<T>> => {
    return axios.get(url)
}

const postApi = (url: string, body: any) => {
    return axios.post(url, body)
}

export { getApi, postApi }