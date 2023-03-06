import React, {useState} from "react";
import styles from "./experience.module.css";
import jobExperience from "../../container/jobExperience";
import StyledTitle from "../../components/styled-title/styledTitle";

const Experience = () => {
    const [currentCompany, setCurrentCompany] = useState(jobExperience[0].company);

    const handleCompanyClick = (company) => {
        setCurrentCompany(company);
    };

    return (
        <div className={styles.experienceContainer}>
            <div style={{width: "700px"}}>
                <StyledTitle number={2} text={"Where I've Worked"}/>
            </div>
            <div className={styles.content}>
                <div className={styles.company}>
                    {jobExperience.map((job) => (
                        <div
                            key={job.company}
                            className={`${styles.companyDiv} ${
                                job.company === currentCompany ? styles.active : ""
                            }`}
                            onClick={() => handleCompanyClick(job.company)}
                        >
                            <h1 className={styles.companyText}>{job.company}</h1>
                        </div>
                    ))}
                </div>
                <div className={styles.experience}>
                    <div className={styles.subTitle}>
            <span className={styles.jobTitle}>
              {jobExperience.find((job) => job.company === currentCompany)[
                  "jobTitle"
                  ]}
            </span>
                        <span className={styles.companyName}>@ {currentCompany}</span>
                    </div>
                    <h3 className={styles.jobPeriod}>
                        {jobExperience.find((job) => job.company === currentCompany)[
                            "jobPeriod"
                            ]}
                    </h3>
                    <ul className={styles.jobsDone}>
                        {jobExperience
                            .find((job) => job.company === currentCompany)["tasks"]
                            .map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
