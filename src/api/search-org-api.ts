import axios from "axios";

const instance = axios.create({
    baseURL: 'https://search-maps.yandex.ru/v1/',
})
const apikey = "2fabdc58-1495-4a84-afef-ac1bc6f1f91c"

export const getSchoolsApi = async (requestText: string) => {
    return (await instance.get(`?text=${requestText} обучение программированию, it школа&results=100&lang=ru_RU&apikey=${apikey}`))
        .data
}
