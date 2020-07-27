import React, { Component } from 'react'
import styles from './Form.module.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";

export default class Form extends Component {
    render() {
        return (  
            <div className={styles.container}>
                <form>
                    <p className={styles.label}>Guess a number(1-100)</p>
                    <input className={styles.input} type="number" placeholder="Enter Number"/>
                    <button className={styles.btn}>GUESS</button>
                </form>
                <div className={styles.progress}>
                    <SemiCircleProgressBar percentage={25} stroke={"#0062FF"} background={"#fff"} strokeWidth={20} diameter={350}/>
                </div>
            </div>
        )
    }
}
