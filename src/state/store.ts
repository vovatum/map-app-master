import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { geocodeReducer } from "./geocoder-reducer";

const rootReducer = combineReducers({
    cityData: geocodeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
