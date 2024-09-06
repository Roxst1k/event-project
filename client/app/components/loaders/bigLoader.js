import React from 'react';
import styles from './loader.module.css';


const BigLoader = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className={styles.bigLoaderWrapper}>
                <div className={styles.bigLoader}></div>
                <p className={styles.title}>Loading.....</p>
            </div>
        </div>
    );
};

export default BigLoader;