import '../../../utils/i18next';
import {ItemPropsType} from '../../../utils/types';
import s from './carousel.module.scss';
import arrow from '../../../assets/icon/arrow.png';

// import {useTranslation} from 'react-i18next';
import {useState, Children, useEffect, cloneElement} from 'react';

const CarouselItem = ({children}:any) => {

    // const {t} = useTranslation();

    const [pages, setPages]= useState([]);

    useEffect(()=> {
        setPages(
            Children.map(children,child => {
                return cloneElement(child,{
                    style: {
                        height: '100%',
                        maxWidth: '25rem',
                        minWidth: '25rem',
                    }
                })
            })
        )
    }, [])

    return (
        <div className={s.carousel}>
            <div className={s.content}>
                <div className={s.item}>
                    
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;