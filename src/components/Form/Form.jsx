import React from 'react'
import styles from './Form.module.css';

const Form = ({GuessTop}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        GuessTop(guess);
    }
    return(
        <div onSubmit={onSubmit}>
            <form>
                <p className={styles.label}>Guess a number(1-100)</p>
                <input className={styles.input} type="number" name="guess" placeholder="Enter Number"/>
                <input type="submit" className={styles.btn} value="GUESS"/>
            </form>
        </div>
    ) 
}

export default Form;