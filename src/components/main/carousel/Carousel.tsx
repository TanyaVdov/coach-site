import '../../../utils/i18next';
import {CarouselItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

import {useTranslation} from 'react-i18next';
import {Row, Col} from 'react-bootstrap';
import CarouselItem from "./CarouselItem";

const Carousel = () => {

    const {t} = useTranslation();

    const carouselItemAll:CarouselItemPropsType[] = t('carousel', {returnObjects: true});

    return (
        <Row className={s.row}>

            <Col lg={2}/>

            <Col lg={8}>

                <ul className={s.carousel}>
                    {carouselItemAll.map((item:CarouselItemPropsType) => (
                        <CarouselItem img={item.img} title={item.title} text={item.text}/>
                    ))}
                </ul>

                <button 
                className={s.buttonDown}
                >
                    <img 
                    className={s.arrowDown} 
                    src={arrow} 
                    alt='button down'/>
                </button>

                <button 
                className={s.buttonUp}
                >
                    <img 
                    className={s.arrowUp} 
                    src={arrow} 
                    alt='button up'/>
                </button>

            </Col>

            <Col lg={2} />

        </Row>
    );
};

export default Carousel;