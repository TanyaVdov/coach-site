import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';
import './utils/i18next';
import Header from "./components/header/Header";
import Routing from "./utils/Routing";
import Container from "react-bootstrap/Container";

const App = () => {
    return (

        <BrowserRouter>
            <Suspense fallback='loader'>
                <Container className='container'>
                    <div className='app'>

                        <div className='fixed'>
                            <Header/>
                        </div>

                        <div className='content'>
                            <Routing/>
                        </div>

                    </div>
                </Container>
            </Suspense>
        </BrowserRouter>
    )
        ;
}

export default App;