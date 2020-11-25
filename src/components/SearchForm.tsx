import React from 'react';
import '../App.css';
import {Input} from "./Input";
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {LocationType} from "../state/input-reducer";

type FormPropsType = {
    redirectFunc: () => void
    doRedirectFunc: () => void
}

export const SearchForm = React.memo(function (props: FormPropsType) {
    const location = useSelector<AppRootStateType, Array<LocationType>>(state => state.inputData)
    return (
        <form className="formWrapper">
            <div className='formName'>Name</div>
            {location.map(item => {
                return <div className={'form' + item.id}>
                    <div>{item.id}</div>
                    <Input
                        key={item.id}
                        id={item.id}
                        value={item.name}
                        redirectFunc={props.redirectFunc}
                        placeholder={'E' + `nter your ${item.id}`.toLowerCase()}
                    />
                </div>
            })}
            <div>
                <NavLink to='/yandexMap'>
                    <button className='btnFormSearch'
                            onClick={props.redirectFunc}>Search
                    </button>
                </NavLink>
                {/*{props.doRedirectFunc()}*/}
            </div>
            <div/>
        </form>
    )
})
