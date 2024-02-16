import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Function to handle budget change
    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        // Ensure the new budget value is not less than the total amount spent
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudgetValue < totalExpenses) {
            alert("The budget cannot be lower than the total amount spent so far.");
            return;
        }

        // Set an upper limit of 20,000 for the budget
        if (newBudgetValue > 20000) {
            alert("The budget cannot exceed 20,000.");
            return;
        }

        setNewBudget(newBudgetValue);
    };

    // Function to increase budget by 10
    const increaseBudget = () => {
        setNewBudget(prevBudget => prevBudget + 10);
    };

    // Function to decrease budget by 10
    const decreaseBudget = () => {
        // Ensure the budget does not go below the total amount spent
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget - 10 < totalExpenses) {
            alert("The budget cannot be lower than the total amount spent so far.");
            return;
        }

        setNewBudget(prevBudget => prevBudget - 10);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={() => setNewBudget(Math.max(0, newBudget))}
            />
           
        </div>
    );
};

export default Budget;
