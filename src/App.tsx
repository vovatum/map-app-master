import React from 'react';
import './App.css';
import {MapPage} from './components/MapPage/MapPage';
import {SearchModule} from "./components/SearchModule/SearchModule";


const App = () => {

    return (
        <div >
            <SearchModule/>
            <MapPage/>
        </div>
    )
}

export default App;
