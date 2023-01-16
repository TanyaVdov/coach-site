import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';
import './utils/i18next';
import loader from "./assets/loader.gif";
import Header from "./components/header/Header";
import Routing from "./utils/Routing";
import Container from "react-bootstrap/Container";

const App = () => {
    return (
        <Container className='container'>
            <BrowserRouter>
                <Suspense fallback={
                <div className='loader'>
                    <img src={loader} alt='loader'/>
                </div>}>

                    <div className='app'>

                        <div className='fixed'>
                            <Header/>
                        </div>

                        <div className='content'>
                            <Routing/>
                        </div>

                    </div>
                </Suspense>
            </BrowserRouter>
        </Container>
    );
}

export default App;