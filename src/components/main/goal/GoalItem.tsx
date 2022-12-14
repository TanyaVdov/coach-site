import '../../../utils/i18next';
import {ItemPropsType} from '../../../utils/types';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';

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
        <li className={s.item}
            key={img}
            id={img}
            onMouseEnter={setTextMode}
            onMouseLeave={setImageMode}>

            {!itemMode &&
                <img className={s.image} src={require(`../../../assets/icon/goal/${img}.png`)} alt={img}/>
            }

            {itemMode &&
                <div className={s.text}>{t(text)}</div>
            }

        </li>
    );
};

export default GoalItem;