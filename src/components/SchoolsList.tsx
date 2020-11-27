import React from 'react';
import '../App.css';
import {SchoolType} from "../state/geocoder-reducer";

type PropsType = {
    schools: Array<SchoolType>
}

function SchoolsList(props: PropsType) {
    console.log(props.schools)
    return (
        <div className="listWrapper">
            <div className="schoolItem">
                {props.schools.map(school => {
                    return <div>-
                        {school.properties.name},
                        {school.properties.description},
                    </div>
                })}
            </div>
        </div>
    );
}

export default SchoolsList;