import { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = () => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredPoints, setEnteredPoints] = useState('')
    const [enteredDate, setEnteredDate] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log('event.target.value');

    };

    const pointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Purchase Amount</label>
                    <input type="text" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Reward Points</label>
                    <input type="number" min="0.01"  step="0.01" onChange={pointsChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-0--01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
            <button type="submit">Add Expense</button></div>
        </form>
    )
}

export default NewExpenseForm;