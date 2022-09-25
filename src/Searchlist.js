import React from 'react'
import SearchNewsList from "./Components/searchnewslist"
import {useEffect, useState} from 'react'
import SearchBox from './Components/Search';
import { useParams } from 'react-router-dom'

export default function SearchList() {

  let { sText } = useParams()
  console.log("mytext:",sText)
  
  if (sText===undefined) sText=""
  return (
    <div>
          <SearchBox className='flex justify-center items-center '/>  
          <SearchNewsList stext={sText} />
    </div>
     )
}

