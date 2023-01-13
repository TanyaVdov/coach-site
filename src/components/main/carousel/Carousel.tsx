import '../../../utils/i18next';
import {CarouselItemProps} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {Row, Col} from 'react-bootstrap';

const Carousel = () => {

    const {t} = useTranslation();

    const carouselItems:CarouselItemProps[] = t('carousel', {returnObjects: true});

    const [index, setIndex] = useState<number>(0);

    const item = carouselItems[index];
    console.log(item);

    const handlerClick = (diff:number) => {
        let newIndex = index + diff;
        
        if (newIndex < 0) newIndex = carouselItems.length-1;
        else if (newIndex > carouselItems.length-1) newIndex = 0;

        setIndex(newIndex);
    }

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
                        <h2>{item.title}</h2>
                        <ul className={s.ul}>
                            {item.text.map((li:string) =>
                            (<li key={li}>{li}</li>))}
                        </ul>
                    </div>
               
                    <div className={s.colImg}>
                        <img className={s.img} 
                        src={`/image/results/${item.img}.png`} 
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