import '../../../utils/i18next';
import {ItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

// import {useTranslation} from 'react-i18next';
// import {Children} from 'react';
import {Col} from 'react-bootstrap';

const CarouselItem = ({children}:any) => {

    // const [currentImage, setCurrentImage]= useState([]);

    // const {t} = useTranslation();

    return (
        <div>
            <Col lg={4} className={s.colContent}>
                
                <button className={s.buttonDown}>
                    <img className={s.arrowDown} src={arrow} alt='button down'/>
                </button>

                {children}

            </Col>

            <Col lg={4} className={s.colImg}>

                <button className={s.buttonUp}>
                    <img className={s.arrowUp} src={arrow} alt='button down'/>
                </button>

            </Col>
        </div>
    );
};

export default CarouselItem;