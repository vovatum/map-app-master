import * as API from "../api/geocoder-api";
import React from "react";

type PropertiesType = {
    name: {} | null | undefined
    description: React.ReactNode
    CompanyMetaData: any;
}
type GeometryType = {
    coordinates: Array<number>
    type: string
}
export type SchoolType = {
    geometry: GeometryType
    properties: PropertiesType
    type: string
}
type InitialStateType = {
    cityCoordinates: Array<number>,
    schools: Array<SchoolType>
}
type ActionType = ReturnType<typeof addCityCoordinates> | ReturnType<typeof setCityCoordinates>

const initialState = {
    cityCoordinates: [53.90, 27.56],
    schools: [{
        geometry: {
            coordinates: [1, 2],
            type: ''
        },
        properties: {
            name: {},
            description: null,
            CompanyMetaData: {
                id: '',
                name: '',
                address: '',
                url: '',
            },

        },
        type: ''
    }]
}

export const geocodeReducer = (state: InitialStateType = initialState, action: ActionType) => {

    console.log(JSON.stringify(state))

    switch (action.type) {
        case 'GET_CITY_COORDINATES':
            return {
                ...state,
                cityCoordinates: action.cityCoordinates,
                schools: action.schools
            }
        case 'SET_CITY_COORDINATES':
            return {
                ...state,
                cityCoordinates: action.cityCoordinates,
            }
        default :
            return state;
    }
}

export const addCityCoordinates = (cityCoordinates: Array<number>, schools: Array<any>) => ({
    type: 'GET_CITY_COORDINATES',
    cityCoordinates,
    schools
} as const)

export const setCityCoordinates = (cityCoordinates: Array<number>) => ({
    type: 'SET_CITY_COORDINATES',
    cityCoordinates,
} as const)

export const getCityCoordinates = (country: string, city: string) => async (dispatch: any) => {
    const cityCoordinates = await API.getCoordinate(country + ' ' + city)
    const schools = await API.getSchoolsApi(country + ' ' + city)
    dispatch(addCityCoordinates(cityCoordinates, schools))
}

