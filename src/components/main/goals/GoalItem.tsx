import '../../../utils/i18next';
import {ItemProps} from '../../../utils/types';
import s from './goals.module.scss';

import {useTranslation} from 'react-i18next';
import {useState} from 'react';


const GoalItem = ({img, text}: ItemProps) => {

    const {t} = useTranslation();

    const [itemMode, setItemMode]= useState(false);

    const setTextMode = () => {
        setItemMode(true);
    }
    const setImageMode = () => {
        setItemMode(false);
    }

    return (
        <li className={s.item}
            key={img} id={img}
            onMouseEnter={setTextMode}
            onMouseLeave={setImageMode}>
            {!itemMode &&
                <img className={s.image} src={`image/goal/${img}.png`} alt={img}/>
            }
            {itemMode &&
                <div className={s.text}>{text}</div>
            }
        </li>
    );
};
export default GoalItem;