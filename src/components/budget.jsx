import React,{useContext} from 'react'

import { AppContext } from '../AppContext'
import Vbudget from './vbudget';
export default function Budget() {
  const{budget}=useContext(AppContext);


  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
     
        <Vbudget budget={budget}/>
      

      
      <span> budget : {budget}$</span>
    </div>
  )
}
