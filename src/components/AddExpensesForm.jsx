import React from 'react'
import { useState,useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../AppContext';
import { v4 as uuidv4 } from 'uuid';
export default function AddExpensesForm() {
    const{dispatch}=useContext(AppContext)
    const[name,setName]=useState('');
    const[cost, setCost]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        const expense={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        };
        dispatch({
            type:'ADO_EXPENSE',
            payload:expense,
        });
    };
    const notify=()=>toast('name --'+name+'amount --'+cost )
  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                <label htmlFor='name'>Name</label>
                <input required='required' type='text' className='form-control' id='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='col-sm'>
                <label htmlFor="cost">Cost</label>
                <input required='required' type="text"  className='form-control' id='cost' value={cost} onChange={(e)=>setCost(e.target.value)}/>
            </div>
            <div className="col-sm">
                <button type='submit' className='btn btn-primary' onClick={notify}>
                    Save
                </button>
                <ToastContainer/>
            </div>
        </div>
    </form>
  )
}
