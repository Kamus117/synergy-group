import React, { useEffect, useState } from 'react'
import styles from './Logo.module.css'

const Logo = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 300)
    }, [])

    return (
        <div className={isVisible ? styles.isVisible : ''}>
            <div className={styles.logoWrapper}>
                <svg
                    className={styles.animatedLogo}
                    width="211"
                    height="319"
                    viewBox="0 0 211 319"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className={`${styles.logoPart} ${styles.shape1}`} d="M101.5 101.5V0.533203C61.1577 3.00967 35.9493 20.3645 20.8037 41.0586C5.73537 61.6472 0.610007 85.569 0.504883 101.5H101.5Z" fill="#3D768A" />

                    <circle className={`${styles.logoPart} ${styles.shape2}`} cx="159" cy="51" r="51" fill="#375661" />

                    <path className={`${styles.logoPart} ${styles.shape3}`} d="M101.5 108.5V209.467C61.1577 206.99 35.9493 189.636 20.8037 168.941C5.73537 148.353 0.610007 124.431 0.504883 108.5H101.5Z" fill="#D6CDAC" />

                    <path className={`${styles.logoPart} ${styles.shape4}`} d="M108.5 209.5V108.533C148.842 111.01 174.051 128.364 189.196 149.059C204.265 169.647 209.39 193.569 209.495 209.5H108.5Z" fill="#AAA087" />

                    <circle className={`${styles.logoPart} ${styles.shape5}`} cx="51.25" cy="267.25" r="51.25" fill="#818181" />

                    <path className={`${styles.logoPart} ${styles.shape6}`} d="M108 216.5V317.467C148.744 314.991 174.203 297.635 189.498 276.939C204.714 256.351 209.891 232.43 209.997 216.5H108Z" fill="#585858" />
                </svg>

                <h1 className={styles.logoTitle}>Synergy Group</h1>
            </div>

        </div>
    )
}

export default Logo