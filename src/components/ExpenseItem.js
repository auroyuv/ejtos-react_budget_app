import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import plusIcon from '../assets/plus-icon.png'
import minusIcon from '../assets/minus-sign-icon.webp'

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <img src={plusIcon} alt="plus icon" style={{width:"30px"}} onClick={() => increaseAllocation(props.name)} className="btn-icon"/>
                
                
             
            </td>
            <td>
            <img src={minusIcon} alt="plus icon" style={{width:"30px"}} onClick={() => decreaseAllocation(props.name)} className="btn-icon minus"/>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
