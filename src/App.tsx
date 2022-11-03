import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

import Header from "./components/header/Header";
import Routing from "./utils/Routing";


const App = () => {
    return (

        <BrowserRouter>
            <Suspense fallback="loading">
                <div className='app'>

                    <div className='app_fixed'>
                        <Header/>
                    </div>

                    <div className='app_content'>
                        <Routing/>
                    </div>

                </div>
            </Suspense>
        </BrowserRouter>
    )
        ;
}

export default App;
