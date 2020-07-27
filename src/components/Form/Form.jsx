import React from 'react'
import styles from './Form.module.css';
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Form = ({GuessTop}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        GuessTop(guess);
    }
    return(
        <div onSubmit={onSubmit} className={styles.container}>
            <form>
                <p className={styles.label}>Guess a number(1-100)</p>
                <input className={styles.input} type="number" name="guess" placeholder="Enter Number"/>
                <input type="submit" className={styles.btn} value="GUESS"/>
            </form>
            <div className={styles.progress}>
                <SemiCircleProgressBar percentage={25} stroke={"#0062FF"} background={"#fff"} strokeWidth={20} diameter={350}/>
            </div>
        </div>
    ) 
}

export default Form;