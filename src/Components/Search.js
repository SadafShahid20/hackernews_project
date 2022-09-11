
import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'



  export default function SearchBox({value, onChange, onClick}) {
    return <div className='searchbox'>
        <input type="text" placeholder='type your search' value={value} onChange={onChange} />
        <BiSearchAlt className='icon' onClick={onClick}/>
    </div>

}

    export function Input(props) {

        return <input 
            value={props.value} 
            placeholder={props.text}
            onChange={props.cb}
    />
}
