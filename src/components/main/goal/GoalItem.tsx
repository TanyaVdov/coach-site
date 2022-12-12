import '../../../utils/i18next';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';

export type ItemPropsType = {
    img: string;
    text: string;
}

const GoalItem = ({img, text}: ItemPropsType) => {

    const [itemMode, setItemMode]= useState(false);

    const {t} = useTranslation();

    const setTextMode = () => {
        setItemMode(true);
    }

    const setImageMode = () => {
        setItemMode(false);
    }

    return (
        <li className={img}
            key={img}
            onMouseEnter={setTextMode}
            onMouseLeave={setImageMode}>

            {!itemMode &&
                <img src={require(`../../../assets/icon/goal/${img}.png`)} alt={img}/>
            }

            {itemMode &&
                <div className={s.text}>{t(text)}</div>
            }

        </li>
    );
};

export default GoalItem;