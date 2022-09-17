
import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'



  export default function SearchBox({onChange, sText}) {
    
    console.log("search:", sText)
    return <div className='static ...'>
        <hr></hr>
        <br></br>
        <div>
            <input type="text" placeholder='type your search' value={sText} onChange={onChange} />
            <Link to={`/search/${sText}`} className='text-black'>Search</Link>
        </div>
    </div>

}

    export function Input(props) {

        return <input 
            value={props.value} 
            placeholder={props.text}
            onChange={props.cb}
    />
}
