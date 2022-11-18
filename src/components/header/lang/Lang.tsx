import React from "react";
import {useTranslation} from 'react-i18next';
import '../../../utils/i18next';
import s from './lang.module.scss';

const Lang = () => {

    const {i18n} = useTranslation();
    const changeLanguage = (lng: 'en' | 'ua') => {
        i18n.changeLanguage(lng);
    }

    return (

        <div className={s.lang}>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('ua')}>ua</button>
        </div>
    );
};

export default Lang;