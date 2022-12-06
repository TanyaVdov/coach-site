import '../../../utils/i18next';
import s from './goal.module.scss';

import {useTranslation} from 'react-i18next';

const GoalItem = ({id, text}) => {

    const {t} = useTranslation();

    return (
        <li className={s.goalItem} id={id}>
            {t(text)}
        </li>
    );
};

export default GoalItem;