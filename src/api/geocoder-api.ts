import axios from "axios";

const instance = axios.create({
    baseURL: 'https://geocode-maps.yandex.ru/1.x/',
})
const apikey = "cf257613-388c-495a-989f-98c40a840056"

export const getCoordinate = async (requestText: string) => {
    return (await instance.get(`?format=json&geocode=${requestText}&apikey=${apikey}`))
        .data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().map((el: string) => +el)

}

const instance2 = axios.create({
    baseURL: 'https://search-maps.yandex.ru/v1/',
})
const apikey2 = "2fabdc58-1495-4a84-afef-ac1bc6f1f91c"

export const getSchoolsApi = async (requestText: string) => {
    const arr = ['средняя', 'гимназия']
    const value = new RegExp(arr.join('|'), 'i')
    return (await instance2.get(`?text=${requestText} обучение программированию, it школа&results=100&lang=ru_RU&apikey=${apikey2}`))
        .data.features.filter((s: any) => !s.properties.name.toLowerCase().match(value)).map((s: any) => ({
            ...s,
            coordinates: s.geometry.coordinates.reverse()
        }))
}