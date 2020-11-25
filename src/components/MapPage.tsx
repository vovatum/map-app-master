import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {AppRootStateType} from '../state/store';

type PropsType = {}

export const MapPage = React.memo((props: PropsType) => {

    const cityCoordinates = useSelector<AppRootStateType, Array<number>>(state => state.cityData.cityCoordinates)
    const schools = useSelector<AppRootStateType, Array<any>>(state => state.cityData.schools)

    return (
        <div>
            <YMaps>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map state={{center: cityCoordinates, zoom: 12}} width={'100%'} height={'100vh'}>
                        {schools.map((school) => <Placemark  geometry={school.geometry.coordinates} properties={{
                            iconCaption: school.properties.name,
                        }}/>)}
                    </Map>
                </div>
            </YMaps>
        </div>
    )
})

// key={school.properties.CompanyMetaData.id}


