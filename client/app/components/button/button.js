'use client'

import React from 'react';
import styles from './button.module.css';

const Button = ({children, size, handler, type}) => {
    const sizeClass = size === 'small' ? styles.small : styles.medium;

    return (
        <button
            className={`${styles.button} ${sizeClass}`}
            onClick={handler}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;