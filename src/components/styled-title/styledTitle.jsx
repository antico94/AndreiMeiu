import React from 'react';
import styles from "./styled-title.module.css"

const StyledTitle = ({number, text}) => {
    return (
        <div className={styles.styledTitle}>
            <div>
                <span>{`0${number}.`}</span>
                <h1>{text}</h1>
            </div>
            <div className={styles.styledLine}></div>
        </div>
    );
};

export default StyledTitle;