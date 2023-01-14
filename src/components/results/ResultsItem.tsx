import '../../utils/i18next';
import {BigItemProps} from '../../utils/types';
import s from './results.module.scss';

import {useTranslation} from 'react-i18next';


const ResultsItem = ({img, title, subtitle, text1, text2, text3, text4, text5}: BigItemProps) => {

    const {t} = useTranslation();

    return (
        <li className={s.item} key={img}>
            <div className={s.title}>
                {/* <img className={s.image} src={`public/image/results/${img}.png`} alt={img}/> */}
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            
            <div className={s.text}>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
                <p>{text5}</p>
            </div>
        </li>
    );
};
export default ResultsItem;