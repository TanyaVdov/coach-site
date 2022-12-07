import '../../../utils/i18next';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import React from "react";

export type ItemPropsType = {
    img: string;
    text: string;
}

const GoalItem = ({img, text}: ItemPropsType) => {

    const {t} = useTranslation();

    return (
        <li className={s.goalItem} key={img}>
            {t(text)}
            <img src={require(`../../../assets/icon/goal/${img}.png`)} alt={img}/>
        </li>
    );
};

export default GoalItem;