import React, { useState } from 'react';
import style from './header.module.css';
import logo from './../../assets/svg/logo.svg';

const Header = () => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    return (
        <header className={style.header}>
            <nav className={style.container}>
                <div
                    className={style.left}
                    onMouseEnter={() => setIsLeftHovered(true)}
                    onMouseLeave={() => setIsLeftHovered(false)}
                >
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 290.18 335.07"
                        className={style.logoSvg}
                    >
                        <path
                            fill="#64FFDA"
                            style={{
                                fill: isLeftHovered ? 'rgba(100, 255, 218, 0.1)' : 'none',
                                stroke: '#64ffda',
                                strokeMiterlimit: 10,
                                strokeWidth: isLeftHovered ? 22 : 20,
                            }}
                            d="M5 86.65 145.09 5.77l140.09 80.88v161.76l-140.09 80.88L5 248.41V86.65z"
                        />
                        <text
                            color="#64FFDA"
                            transform="translate(96 220.59)"
                            style={{
                                fill: '#64ffda',
                                fontFamily: "Segoe UI Emoji,'Regular'",
                                fontSize: 150,
                                fontWeight: 550,
                            }}
                        >
                            <tspan x={0} y={0}>
                                {'A'}
                            </tspan>
                        </text>
                    </svg>
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
                    <button className={style.resumeButton}>Resume</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;