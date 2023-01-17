import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import s from './navbar.module.scss';

const Navbar = () => {

    const {t} = useTranslation();

    return (
        <div className={s.navbar}>
            <div className={s.navItem}>
                <Link to='/' >{t('header.main')}</Link>
            </div>

            <div className={s.navItem}>
                <Link to='/about' >{t('header.about')}</Link>
            </div>

            <div className={s.navItem}>
                <Link to='/result' >{t('header.result')}</Link>
            </div>

            <div className={s.navItem}>
                <a href="#footer">{t('header.contact')}</a>
            </div>
        </div>
    );
};

export default Navbar;