import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleChangeCurrency = (event) => {
        const newCurrency = event.target.value;

        // Dispatch an action to change the currency
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className='alert alert-success currency'>
            <label htmlFor="currency">Currency:</label>
            <select id="currency" value={currency} onChange={handleChangeCurrency} className="custom-select alert alert-success">
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default ExpenseCurrency;
