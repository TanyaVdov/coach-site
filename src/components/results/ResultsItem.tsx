import '../../utils/i18next';
import {BigItemProps} from '../../utils/types';
import s from './results.module.scss';

const ResultsItem = ({img, title, subtitle, text1, text2, text3, text4, text5}: BigItemProps) => {

    return (
        <li className={s.item} key={img} id={img}>
            <div className={s.title}>
                <div className={s.colImg}>
                    <img className={s.img} src={`image/results/${img}.jpg`} alt={img}/>
                </div>
                
                <div className={s.colTitle}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
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