import React, { useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'



  export default function SearchBox() {
 

    const [searchText, setSearchText] = useState("");

    function handleChange(e){
        setSearchText(e.target.value)
    }

    return <div className='bg-red-900 static flex justify-center items-center h-[50px]'>
    <hr></hr>
    <br></br>

    <div flex justify-center>
        <input type="text" placeholder='type your search' defaultValue ="" onChange={handleChange} />

        <Link to={`/search/${searchText}`} className='text-black'>Search</Link>
    </div>
    <br></br>
    <hr></hr>
</div>

}