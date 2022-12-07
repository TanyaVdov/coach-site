import '../../../utils/i18next';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';
import React from "react";

export type ItemPropsType = {
    id: string;
    text: string;
}

const GoalItem = ({id, text}: ItemPropsType) => {

    const {t} = useTranslation();

    return (
        <li className={s.goalItem} key={id}>
            {t(text)}
        </li>
    );
};

export default GoalItem;