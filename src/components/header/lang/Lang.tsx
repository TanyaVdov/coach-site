import React, { useState } from "react";
import {useTranslation} from 'react-i18next';
import '../../../utils/i18next';
import s from './lang.module.scss';

const Lang = () => {

    const {i18n} = useTranslation();
    const changeLanguage = (lng: 'en' | 'ua') => {
        i18n.changeLanguage(lng);
    }

    const [listMode, setListMode] = useState(false);

    return (
        <div className={s.lang}>
            <div className={s.global}
            onClick={()=> setListMode(!listMode)}>
                <img className={s.icon} 
                src={require('../../../assets/icon/global.png')} 
                alt='global'/>
            </div>
            
            <div className={listMode ? s.hide : s.list} onClick={() => setListMode(false)}>
                <div className={s.li}>
                    <button className={s.en} onClick={() => changeLanguage('en')}>EN</button>
                    <button className={s.ua} onClick={() => changeLanguage('ua')}>UA</button>
                </div>  
            </div>
        </div>
    );
};
export default Lang;