import axios from "axios";

const instance = axios.create({
    baseURL: 'https://geocode-maps.yandex.ru/1.x/',
})
const apikey = "cf257613-388c-495a-989f-98c40a840056"

export const getCoordinate = async (requestText: string) => {
    return (await instance.get(`?format=json&geocode=${requestText}&apikey=${apikey}`))
        .data.response
}
