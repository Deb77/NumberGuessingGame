import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Number Guessing Game</p>
        </div>
    )
}

export default Navbar;