
import React from 'react'
import SearchNewsList from "./Components/searchnewslist"
import {useEffect, useState} from 'react'
import SearchBox from './Components/Search';
import { useParams } from 'react-router-dom'

export default function SearchList() {

  let { sText } = useParams()
  console.log("mytext:",sText)
  
  const [searchText, setSearchText] = useState(sText)
  
 
  function  handleChange (e) {
    console.log("app search value: ", e.target.value);
    setSearchText(e.target.value)
  }
  
  console.log ("SearchText:", searchText)
  return (
    <div>
          <SearchBox sText = {searchText} onChange={handleChange}/>  
          <SearchNewsList stext={searchText} />
    </div>
     )
}

