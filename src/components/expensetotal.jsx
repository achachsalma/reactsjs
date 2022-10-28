import React,{useContext} from 'react'
import { AppContext } from '../AppContext'
export default function Expensetotal() {
  const {expenses}=useContext(AppContext);
  const totalExpenses= expenses.reduce((total,item)=>{
    return (total+=item.cost);
  },0); 
  return (
    <div className='alert alert-primary'>
<span>spent so far : {totalExpenses}$</span>
    </div>
  )
}
