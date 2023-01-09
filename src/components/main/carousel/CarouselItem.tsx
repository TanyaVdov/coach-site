import '../../../utils/i18next';
import {CarouselItemPropsType} from '../../../utils/types';
import s from './carouselitem.module.scss';
import {useTranslation} from 'react-i18next';

export const CarouselItem = ({img, title, text}: CarouselItemPropsType) => {

    const {t} = useTranslation();

    return (
            <li 
            className={s.item}
            key={img}
            >   
                <div className={s.colContent}>
                    <h2>{t(title)}</h2>
                    <ul>
                        {text.map((li) =>
                        (<li>{t(li)}</li>))}
                    </ul>
                </div>

                <div className={s.colImg}>
                    <img className={s.img} src={require(`../../../assets/photo/results/${img}.png`)} alt={img}/>
                </div>
                    
            </li>
    );
};

export default CarouselItem;