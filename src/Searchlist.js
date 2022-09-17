import React from 'react'
import { useParams } from 'react-router-dom';
import NewsList from "./Components/newslist"

export default function Searchlist() {
  
    let { sText } = useParams();

    return (
        <NewsList stext={sText} aa={()=>console.log({sText})} />
  )
}
