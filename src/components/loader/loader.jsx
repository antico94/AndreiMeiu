import React, { useEffect, useRef, useState } from 'react';
import styles from './Loader.module.css';
import Lottie from 'react-lottie';
import animationData from './../../assets/animation-data.json';
import lottie from "lottie-web"

const Loader = ({ onLoaderComplete }) => {
    const loader = useRef(null);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: loader.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData,
        });

        anim.setSubframe(false); // Scale down the animation
        anim.addEventListener('complete', () => {
            console.log('Animation completed');
            setAnimationCompleted(true);
            if (onLoaderComplete) {
                onLoaderComplete();
            }
        });

        return () => {
            anim.destroy();
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.loader} ref={loader}></div>
            {!animationCompleted && <div className={styles.overlay}></div>}
        </div>
    );
}

export default Loader;
