import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './scss/main.scss';
import Home from './components/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exect path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;