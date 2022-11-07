import React from "react";
import '../../utils/i18next';
import {useTranslation} from 'react-i18next';

const Main = () => {

    const {t} = useTranslation();

    return (
        <div className='main'>

            <div className='main_photo'>

            </div>

            <div className='main_content'>
                <h1>{t('main.title')}</h1>
                <p>{t('main.description_1')}</p>

                <div className='repeat_button'>
                    <button>Free...</button>
                </div>

                <p>{t('main.description_2')}</p>
            </div>

        </div>
    );
};

export default Main;