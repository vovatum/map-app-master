import React, {ChangeEvent, useState} from 'react';
import '../App.css';
import {Input} from "./Input";
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addLocationName, LocationType} from "../state/input-reducer";
import {getCityCoordinates} from "../state/geocoder-reducer";

type FormPropsType = {
    redirectFunc: () => void
    doRedirectFunc: () => void
}

export const SearchForm = React.memo(function (props: FormPropsType) {

    const locations = useSelector<AppRootStateType, Array<LocationType>>(state => state.inputData)
    const dispatch = useDispatch()

    const onChangeHandler = (id: string, value: string) => {
        dispatch(addLocationName(id, value))
    }
    const onKeyPressHandler = (id: string, key: string) => onSearch()
    const onSearch = () => {
        const country = locations[0].name.trim()
        const city = locations[1].name.trim()
        country === '' && city === ''//geocode
            ? dispatch(getCityCoordinates('Belarus', 'Minsk'))
            : dispatch(getCityCoordinates(country, city))
        props.redirectFunc()
    }

    return (
        <form className="formWrapper">
            <div className='formName'>Name</div>
            {locations.map(item => {
                return <div className={'form' + item.id}>
                    <div>{item.id}</div>
                    <Input
                        key={item.id}
                        id={item.id}
                        value={item.name}
                        placeholder={'E' + `nter your ${item.id}`.toLowerCase()}
                        onChangeHandler={onChangeHandler}
                        onKeyPressHandler={onKeyPressHandler}
                    />
                </div>
            })}
            <div>
                <NavLink to='/yandexMap'>
                    <button className='btnFormSearch'
                            onClick={onSearch}
                    >Search
                    </button>
                </NavLink>
                {props.doRedirectFunc()}
            </div>
            <div/>
        </form>
    )
})
