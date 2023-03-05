import React, {useRef, useState} from 'react';
import styles from './mail.module.css'

const Mail = () => {
    const mailRef = useRef()
    const realEmail = "meiuandrei@gmail.com"
    const [mail, setMail] = useState("meiuandrei@gmail.com");
    const letters = "abcdefghijklmnopqrstuvwxyz"

    const handleMouseOver = () => {
        let iterations = 0
        const interval = setInterval(() => {
            setMail(
                mail.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return realEmail[index]
                        }

                        return letters[Math.floor(Math.random() * 26)]
                    }).join(""))
            if (iterations >= realEmail.length) clearInterval(interval)
            iterations += 1
        }, 25)
    }


    return (
        <div className={styles.mailContainer}>
            <a onMouseOver={handleMouseOver}
               ref={mailRef}
               className={styles.mailAddress} href="mailto:meiuandreig@gmail.com" rel="noopener noreferrer"
               target="_blank">{mail}</a>
            <div className={styles.line}></div>
        </div>

    );
};

export default Mail;