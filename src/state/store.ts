import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {geocodeReducer} from "./geocoder-reducer";
import {inputReducer} from "./input-reducer";

const rootReducer = combineReducers({
    cityData: geocodeReducer,
    inputData: inputReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
