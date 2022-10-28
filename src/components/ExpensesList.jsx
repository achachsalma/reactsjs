import React ,{useContext}from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../AppContext';
import { useState } from 'react';
import { useEffect } from 'react';
export default function ExpensesList() {
    const {expenses}=useContext(AppContext);
    const [filtredExpenses,sefilteredExpenses]=useState(expenses||[]);
    useEffect(()=>{
        sefilteredExpenses(expenses);
    },[expenses])
    const handleChange=(e)=>{
        const searchResults=expenses.filter((filtredExpenses)=>
        filtredExpenses.name.toLowerCase().includes(e.target.value)
        );
        sefilteredExpenses(searchResults);
    };
    return (
    <div >
        <input type="text" className='form-control mb-2 mr-sm-2' placeholder='type to search ...' onChange={handleChange} />
   <ul className='list-group mt-3 mb-3'>
{filtredExpenses.map((expense)=>(
    <ExpenseItem
    id={expense.id}
    name={expense.name}
    cost={expense.cost}
    />
))}
</ul>
    </div>
  )
}
