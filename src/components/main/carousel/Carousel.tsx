import '../../../utils/i18next';
import {CarouselItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

import {useTranslation} from 'react-i18next';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const Carousel = () => {

    const {t} = useTranslation();

    const carouselItem:CarouselItemPropsType[] = t('carousel', {returnObjects: true});

    const [item,setItem] = useState<CarouselItemPropsType>(carouselItem[0]);
    const [index, setIndex] = useState<number>(0);

    return (
        <Row className={s.row}>
            
            <Col lg={2}/>

            <Col lg={8} className={s.container}>

                <button 
                    className={s.buttonDown}>
                    <img className={s.arrowDown} src={arrow} alt='button down'/>
                </button>

                <div className={s.content}>
                
                    <div className={s.colContent}>
                        <h2>{t(carouselItem[index].title)}</h2>
                        <ul>
                            {carouselItem[index].text.map((li:string) =>
                            (<li key={li}>{t(li)}</li>))}
                        </ul>
                    </div>
               
                    <div className={s.colImg}>
                        <img className={s.img} 
                        src={require(`../../../assets/photo/results/${carouselItem[index].img}.png`)} 
                        alt={carouselItem[index].img}/>
                    </div>
               
                </div>

                <button 
                className={s.buttonUp}>
                    <img className={s.arrowUp} src={arrow} alt='button up'/>
                </button>

            </Col>

            <Col lg={2} />
        </Row>
    );
};

export default Carousel;