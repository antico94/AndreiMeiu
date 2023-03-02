import React from 'react';
import style from './header.module.css'
import logo from './../../assets/svg/logo.svg'


const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.container}>
                <div className={style.left}>
                    <img className={style.logoSvg} src={logo}/>
                </div>
                <div className={style.right}>
                    <div className={style.textContainer}>
                        <span className={style.linkPreTitle}>01.</span>
                        <h4 className={style.linkTitle}>About</h4>
                    </div>
                    <div className={style.textContainer}>
                        <span className={style.linkPreTitle}>02.</span>
                        <h4 className={style.linkTitle}>Experience</h4>
                    </div>
                    <div className={style.textContainer}>
                        <span className={style.linkPreTitle}>03.</span>
                        <h4 className={style.linkTitle}>Work</h4>
                    </div>
                    <div className={style.textContainer}>
                        <span className={style.linkPreTitle}>04.</span>
                        <h4 className={style.linkTitle}>Contact</h4>
                    </div>
                    <button className={style.resumeButton}>
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;