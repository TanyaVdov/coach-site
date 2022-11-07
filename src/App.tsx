import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.css';
import './utils/i18next';
import Header from "./components/header/Header";
import Routing from "./utils/Routing";


const App = () => {
    return (

        <BrowserRouter>
            <Suspense fallback='loader'>
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
