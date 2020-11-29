import React, {useState} from 'react';
import {ListBox, ListBoxItem, Map, Placemark, YMaps} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../state/store';
import '../App.css'
import SchoolsList from "./SchoolsList";
import {getCityCoordinates, SchoolType, setCityCoordinates} from "../state/geocoder-reducer";

export const MapPage = React.memo(() => {

    const cityCoordinates = useSelector<AppRootStateType, Array<number>>(state => state.cityData.cityCoordinates)
    const schools = useSelector<AppRootStateType, Array<SchoolType>>(state => state.cityData.schools)
    const [view, setView] = useState('Map view')
    const modeView = () => view === 'Map view' ? setView('List view') : setView('Map view')
    const dispatch = useDispatch()

    const cities = [
        {
            data: {content: 'Minsk'},
            options: {selectOnClick: false},
            coords: [53.902284, 27.561831],
        },
        {
            data: {content: 'Kiev'},
            options: {selectOnClick: false},
            coords: [50.450441, 30.523550],
        },
        {
            data: {content: 'Moscow'},
            options: {selectOnClick: false},
            coords: [55.753559, 37.609218],
        },
    ]

    const onItemClick = (coords: any, city: string) => {
        dispatch(setCityCoordinates(coords))
        dispatch(getCityCoordinates('', city))
    }

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
                            <ListBox data={{content: 'Choose city'}} options={{float: 'left'}}>
                                {cities.map(city =>
                                    <ListBoxItem
                                        data={city.data}
                                        options={city.options}
                                        onClick={() => onItemClick(city.coords, city.data.content)}
                                        key={city.data.content}
                                    />
                                )}
                            </ListBox>

                            {schools.map((school) =>
                                <Placemark geometry={school.geometry.coordinates}
                                           properties={{
                                               iconCaption: school.properties.name,
                                               balloonContentHeader: school.properties.name,
                                               balloonContentBody: `<address>
                                                                     ${school.properties.CompanyMetaData.address}
                                                                     <br/>
                                                                     ${school.properties.CompanyMetaData.url ? `Подробнее: <a href="${school.properties.CompanyMetaData.url}">${school.properties.CompanyMetaData.url}</a>` : ""}
                                                                     </address>`,
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


