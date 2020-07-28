import React from 'react'
import styles from './Form.module.css';

const Form = ({GuessTop,counter}) => {
    if(counter>100){
        counter = counter-100
    }
    else{
        counter = (counter+1)*100
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value;
        GuessTop(guess);
        e.target.elements.guess.value=""
    }
    return(
        <div onSubmit={onSubmit}>
            <form>
                <p className={styles.label}>Guess a number(1-{counter})</p>
                <input className={styles.input} type="number" name="guess" placeholder="Enter Number"/>
                <input type="submit" className={styles.btn} value="GUESS"/>
            </form>
        </div>
    ) 
}

export default Form;