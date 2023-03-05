import React from 'react';
import styles from './introduction.module.css'

const Introduction = () => {
    const handleButtonClick = () => {
        window.open('https://github.com/antico94', '_blank');
    };
    return (
        <div className={styles.introductionContainer}>
            <div className={styles.introduction}>
                <div className={styles.presentMeContainer}>
                    <p className={styles.presentMeText}>Hi, my name is</p>
                </div>
                <div className={styles.nameContainer}>
                    <h1 className={styles.nameText}>Andrei Meiu.</h1>
                </div>
                <div className={styles.iDoContainer}>
                    <h1 className={styles.iDoText}>I build things for the web.</h1>
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionText}>
                        I'm a Junior Full Stack Developer, passionate about creating exceptional digital experiences. Currently, I'm expanding my knowledge of front-end and back-end technologies.
                    </p>
                </div>
                <div className={styles.customButtonContainer}>
                    <button className={styles.customButton} onClick={handleButtonClick}>
                        Check out my GitHub!
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Introduction;