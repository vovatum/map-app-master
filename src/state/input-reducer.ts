export type LocationType = {
    id: string
    name: string
}

const initialState = [
    {id: 'Country', name: ''},
    {id: 'City', name: ''},
]

export const inputReducer = (state: Array<LocationType> = initialState, action: ActionType) => {

    switch (action.type) {
        case 'ADD_LOCATION_NAME':
            return state.map(item => {
                return item.id === action.id
                    ? {...item, name: action.name}
                    : item
            })
        default :
            return state;
    }
}

type ActionType = ReturnType<typeof addLocationName>

export const addLocationName = (id: string, name: string) => ({
    type: 'ADD_LOCATION_NAME', id, name
})


