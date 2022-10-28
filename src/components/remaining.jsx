import React ,{useContext} from 'react'
import { AppContext } from '../AppContext'
export default function Remaining() {
  const{expenses,budget}=useContext(AppContext);
  const totalExpenses =expenses.reduce((total,item)=>{
    return (total=total+item.cost);
  },0); 
  return (
    <div className='alert alert-danger'>
<span> Remaining:{budget-totalExpenses}$</span>
    </div>
  )
}
