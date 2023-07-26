import React, {useRef} from 'react';
import styles from './about.module.css';
import me from './../../assets/me.jpg'
import StyledTitle from "../../components/styled-title/styledTitle";

const About = () => {
    const skills = ['JavaScript', '.NET', 'React', 'SQL', 'Node.js', 'Python', 'React Native', 'After Effects'];
    const photoWrapperRef = useRef(null);
    const photoRef = useRef(null);


    const handleMouseOverPhoto = () => {
        photoWrapperRef.current.backgroundColor = "none"
        photoRef.current.style.filter = "none"
        photoRef.current.style.mixBlendMode = "normal"
    }

    const handleMouseOut = () => {
        photoRef.current.style.filter = "grayscale(100%)"
        photoRef.current.style.mixBlendMode = "multiply"
    }

    return (
        <div className={styles.aboutContainer} id='about'>
            <div className={styles.about}>
                <div className={styles.aboutText}>
                    <StyledTitle number={1} text={"About me"}/>
                    <div className={styles.descriptionContainer}>
                        <p>Hello there! I'm Andrei Meiu, a <span className={styles.highlight}>junior Full Stack
                            Developer</span>. I absolutely love building
                            websites
                            and digital platforms, and I'm thrilled to be able to put my web development skills to use.
                            It's
                            such an exciting time to be working in this field, and I feel grateful for the opportunity
                            to
                            make a difference through my work.
                        </p>
                        <p>My <span className={styles.highlight}>love for web development</span> ignited when I realized
                            the power of creating engaging and
                            interactive experiences for users on the internet. It all started with my desire to have a
                            website, but I struggled with communicating my ideas to web developers effectively. As I
                            delved
                            deeper into the world of web development, I became fascinated by the endless possibilities
                            and
                            the ability to turn my ideas into a reality.</p>
                        <p>
                            Looking back, I feel grateful for the diverse range of experiences I've had in the field of
                            business. Over the past year, I've had the opportunity to work at <span
                            className={styles.highlight}>a large corporation</span>, where
                            I was a part of three different teams and worked on three unique projects. Additionally, I
                            gained valuable experience working for <span
                            className={styles.highlight}>a small business</span>. Through these experiences, I
                            developed a well-rounded perspective on the industry and honed my skills in project
                            management, team collaboration, and problem-solving. I'm confident that my
                            skills and experience will enable me to make a
                            valuable contribution to a team and create impactful work, and I'm excited to find a
                            position where I can do just that.
                        </p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className={styles.skillsList}>
                            {skills.map((skill, i) =>
                                <li key={i}>
                                    {skill}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.photoWrapper} onMouseOver={handleMouseOverPhoto} onMouseOut={handleMouseOut}
                     ref={photoWrapperRef}>
                    <img ref={photoRef} className={styles.img} src={me}/>
                </div>
            </div>
        </div>
    );
};

export default About;
