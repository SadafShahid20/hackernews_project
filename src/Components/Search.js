
import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react'



  export default function SearchBox({onClick, onChange, value}){
   
    
    return <div className='searchbox'>
        <input type="text" placeholder='type your search' onChange={onChange} defaultValue ={value}/>
        <button className='icon' onClick={onClick}>Click Me!
        </button>
    </div>

}

    export function Input(props) {

        return <input 
            value={props.value} 
            placeholder={props.text}
            onChange={props.cb}
    />
}
