import React, { useState} from 'react'
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <>
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses}/>

        </div>
        </>
    )
}

export default Expense
