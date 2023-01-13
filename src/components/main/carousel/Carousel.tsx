import '../../../utils/i18next';
import {CarouselItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

import {useTranslation} from 'react-i18next';
import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';

const Carousel = () => {

    const {t} = useTranslation();

    const carouselItem:CarouselItemPropsType[] = t('carousel', {returnObjects: true});

    const [index, setIndex] = useState<number>(0);

    const item = carouselItem[index];

    const handlerClick = (i:number) => {
        setIndex(index => index + i);
    }

    useEffect (() => {

        if (index < 0) {
            setIndex(carouselItem.length-1);
        }

        else if (index > carouselItem.length-1) {
            setIndex(0);
        }
    }, [index, carouselItem.length])

    return (
        <Row className={s.row}>
            
            <Col lg={2}/>

            <Col lg={8} className={s.container}>

                <button 
                    className={s.buttonDown}
                    onClick={() => handlerClick(1)}>
                    <img className={s.arrowDown} src={arrow} alt='button down'/>
                </button>

                <div className={s.content}>
                
                    <div className={s.colContent}>
                        <h2>{t(item.title)}</h2>
                        <ul>
                            {item.text.map((li:string) =>
                            (<li key={li}>{t(li)}</li>))}
                        </ul>
                    </div>
               
                    <div className={s.colImg}>
                        <img className={s.img} 
                        src={require(`../../../assets/photo/results/${item.img}.png`)} 
                        alt={item.img}/>
                    </div>
               
                </div>

                <button 
                className={s.buttonUp}
                onClick={() => handlerClick(-1)}>
                    <img className={s.arrowUp} src={arrow} alt='button up'/>
                </button>

            </Col>

            <Col lg={2} />
        </Row>
    );
};

export default Carousel;