import React, { useState } from 'react';
import styles from "./css/Speedometer.module.scss";

function Speedometer() {
    const [speed, setSpeed] = useState(0);
    const handleAccelerate = () => {
        if(speed >= 0 && speed < 200){
            setSpeed(speed => speed + 10)
        }
    }
    const handleDecelerate = () => {
        if(speed > 0){
            setSpeed(speed => speed - 10)
        }
    }

    return (
        <div className={styles.appBg}>
            <div className={styles.appContent}>
                <h1 className={styles.heading}>Speedometer</h1>
                <div className={styles.imageWrapper}>
                    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" />
                </div>
                <div className={styles.speedDisplay}>
                    <p>Speed is {speed}mph</p>
                    <span>Min Limit is 0mph, Max Limit is 200mph</span>
                    <div className={styles.brakesContainer}>
                        <button type="button" className={styles.btnElements} onClick={handleAccelerate}>Accelerate</button>
                        <button type="button" className={styles.btnElements} onClick={handleDecelerate}>Apply Brake</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speedometer