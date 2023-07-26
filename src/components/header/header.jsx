import React, { useState } from 'react';
import style from './header.module.css';
import logo from './../../assets/svg/logo.svg';

const Header = ({ isBlurred }) => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsLeftHovered(true);
    };

    const handleMouseLeave = () => {
        setIsLeftHovered(false);
    };

    return (
        <header id="navbar" className={`${style.header} ${isBlurred ? style.navBlurred : ''}`}>
            <nav className={style.container}>
                <div className={style.left} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <LogoSvg isLeftHovered={isLeftHovered} />
                </div>
                <div className={style.right}>
                    <HeaderLink href="#about" linkPreTitle="01." linkTitle="About" />
                    <HeaderLink href="#experience" linkPreTitle="02." linkTitle="Experience" />
                    <HeaderLink href="#work" linkPreTitle="03." linkTitle="Work" />
                    <HeaderLink href="#contact" linkPreTitle="04." linkTitle="Contact" />
                    <button className={style.resumeButton}>Resume</button>
                </div>
            </nav>
        </header>
    );
};

const LogoSvg = ({ isLeftHovered }) => {
    return (
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
    );
};

const HeaderLink = ({ href, linkPreTitle, linkTitle }) => {
    return (
        <a href={href} className={style.textContainer}>
            <span className={style.linkPreTitle}>{linkPreTitle}</span>
            <h4 className={style.linkTitle}>{linkTitle}</h4>
        </a>
    );
};

export default Header;
