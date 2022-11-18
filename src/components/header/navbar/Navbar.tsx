import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import s from './navbar.module.scss';

const Navbar = () => {

    const {t} = useTranslation();

    return (
        <div className={s.navbar}>

            <div className='nav_item'>
                <Link to='/' >{t('header.main')}</Link>
            </div>

            <div className='nav_item'>
                <Link to='/about' >{t('header.about')}</Link>
            </div>

            <div className='nav_item'>
                <Link to='/result' >{t('header.result')}</Link>
            </div>

            <div className='nav_item'>
                <Link to='/result' >{t('header.contact')}</Link>
            </div>

        </div>
    );
};

export default Navbar;