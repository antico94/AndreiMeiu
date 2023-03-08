import styles from './work.module.css'
import React from 'react';
import StyledTitle from "../../components/styled-title/styledTitle";
import Construction from "../../components/under-construction/construction";

const Work = () => {
    return (
        <div className={styles.workContainer}>
            <div style={{width: "550px"}}>
                <StyledTitle number={3} text={"Some Things I've Built"}/>
                <div className={styles.under}>
                    <Construction/>
                </div>
            </div>
        </div>
    );
};

export default Work;