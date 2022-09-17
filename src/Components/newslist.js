
import React from 'react'
import {useEffect, useState} from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';


export default function NewsList() {
    const [news, setNews] = useState([])
    const [text, setText] = useState()
  
         

    
    useEffect(() => {
    console.log("newlist", text);
        async function getData() {
    let response
          try {
          if (text !== '' ) {
                response = await fetch(`http://hn.algolia.com/api/v1/search?query=${text}`)

          } else {
            response = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
          }  
           
            
            const data = await response.json()
            console.log("🚀 ~ data", data)
           setNews( data.hits)
          } catch (error) {
            
            console.log('ERROR:', error.message)
            alert('error getting data')
          }
        }
    
        getData()
      }, [])
      
    
   
  return (

    
    <>
    
    <ul>
      {news.map((items, idx) => <li key = {items.objectID}>
        <a href = {items.url}>{items.title}</a>
        <span>{items.author}</span>
        <span>{items.points}</span>
        <span>{items.created_at}</span>
        <span>{items.num_comments}</span>
        </li>)}
    </ul>
    
    </>
  )
}

