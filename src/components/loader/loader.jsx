import React, {useEffect, useRef} from 'react';
import styles from './Loader.module.css';
import Lottie from 'react-lottie';
import animationData from './../../assets/animation-data.json';
import lottie from "lottie-web"

const Loader = () => {
    const loader = useRef(null)
    useEffect(()=>{
        const anim = lottie.loadAnimation({
            container: loader.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: animationData,
        })
        anim.setSubframe(false); // Scale down the animation
        anim.addEventListener('complete', () => {
            console.log('Animation completed');
            // Execute additional code here when the animation is completed
        });

        return () => {
            anim.destroy()
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.loader} ref={loader}></div>
        </div>
    );
}
export default Loader;
