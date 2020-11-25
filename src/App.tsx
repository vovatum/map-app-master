import React from 'react';
import {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {SearchForm} from "./components/SearchForm";
import {MapPage} from "./components/MapPage";

function App() {

    const [redirect, setRedirect] = useState(false)

    function redirectFunc() {
        setRedirect(true)
    }

    function doRedirectFunc() {
        if (redirect) {
            return <Route path='/yandexMap' render={() => <MapPage/>}/>
        }
    }

    return (
        <div className="App">
            <SearchForm
                redirectFunc={redirectFunc}
                doRedirectFunc={doRedirectFunc}
            />
        </div>
    );
}

export default App;
