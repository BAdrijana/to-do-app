import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';
import './item.css';


const addTask = (props) => (  
        <div className="Task">
            <p>
               <input type="text" value={props.name} 
                 onChange = {props.edited} /> 
            </p>
            <p className='button' onClick={props.deleted} >< FaRegTrashAlt/></p>
        </div>
    )
   
  

export default addTask;