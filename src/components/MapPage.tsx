import React, {useState} from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {AppRootStateType} from '../state/store';
import '../App.css'
import SchoolsList from "./SchoolsList";
import {SchoolType} from "../state/geocoder-reducer";

export const MapPage = React.memo(() => {

    const cityCoordinates = useSelector<AppRootStateType, Array<number>>(state => state.cityData.cityCoordinates)
    const schools = useSelector<AppRootStateType, Array<SchoolType>>(state => state.cityData.schools)
    const [view, setView] = useState('Map view')
    const modeView = () => view === 'Map view' ? setView('List view') : setView('Map view')

    return (
        <div>
            <button onClick={modeView}>Change view</button>
            <YMaps>
                <div className="mapWrapper">
                    {view === 'Map view' ?
                        <Map state={{center: cityCoordinates, zoom: 12, controls: ['zoomControl', 'fullscreenControl']}}
                             width={'100%'} height={'100vh'}
                             modules={['control.ZoomControl', 'control.FullscreenControl', 'geoObject.addon.balloon', 'geoObject.addon.hint']}
                        >

                            {schools.map((school) =>
                                <Placemark geometry={school.geometry.coordinates}
                                           properties={{
                                               iconCaption: school.properties.name,
                                               balloonContentHeader: school.properties.name,
                                               balloonContentBody: school.properties.description,
                                               hintContent: school.properties.name
                                           }}
                                           options={{
                                               preset: "islands#blueLeisureIcon",
                                               hideIconOnBalloonOpen: false
                                           }}

                                />)}
                        </Map>
                        : <SchoolsList schools={schools}/>
                    }
                </div>
            </YMaps>
        </div>
    )
})

// key={school.properties.CompanyMetaData.id}


