import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {addLocationName} from "../state/input-reducer";

type InputPropsType = {
    id: string
    value: string
    placeholder: string
    redirectFunc: () => void
}

export const Input = React.memo(function (props: InputPropsType) {
    const dispatch = useDispatch()
    let [name, setName] = useState('')
    let [error, setError] = useState<string | null>(null)
    const valError = () => {
        if (name.trim() !== '') {
            setName('')
            setError(null)
        } else {
            setName('')
            setError('Name is required')
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(addLocationName(props.id, event.currentTarget.value))
        setName(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && error === null) {
            valError()
        } else {
            setError(null)
            delSpace()
            // && props.redirectFunc()
        }

    }
    const setErrorNull = () => {
        setError(null)
        delSpace()
    }
    const delSpace = () => {
        props.value.trim() === ''
        && dispatch(addLocationName(props.id, ''))
    }

    return error === null
        ? <input className={'formCity input'}
                 type='text'
                 placeholder={props.placeholder}
                 value={props.value}
                 onKeyPress={onKeyPressHandler}
                 onChange={onChangeHandler}
                 onBlur={delSpace}

        />
        : <input className={'error'}
                 value={error}
                 onClick={setErrorNull}
                 onChange={setErrorNull}
                 onKeyPress={onKeyPressHandler}
                 onBlur={setErrorNull}
        />
})