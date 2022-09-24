
import React from 'react'
import {useEffect, useState} from 'react'
import Search from './Search';
import Header from './Header/Header';
import { Link } from 'react-router-dom';
import SearchBox from './Search';


export default function NewsList({stext}) {
    const [news, setNews] = useState([])

    console.log ("hello from newlist", stext)
    useEffect(() => {
      console.log ("hello from newlist2, settext value", stext)
        async function getData() {
          let response;
          try {
              console.log("API called text:", stext)  
              if (stext !== '' ) {
                  console.log("API called text:", stext)  
                  response = await fetch(`http://hn.algolia.com/api/v1/search?query=${stext}`)

              } else {
                response = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
              }  
 
          const data = await response.json()
          console.log("🚀 ~ data", data)
          setNews( data.hits)
          } 
          catch (error) {
          console.log('ERROR:', error.message) 
          alert('error getting data')
          }
        } 
    
        getData()
      }, [stext])

    return (
 
           news.length>0
     
     ?<ul className ="grid  grid-flow-row gap-4 mx-20">
      
      <div>
        <Header />
      </div>
      {news.map((items, idx) => <li  className='flex justify-center items-center flex-col' key = {items.objectID}>
      <a href={items.url}></a>
  
        <br></br>
        <div className='...'>{items.title} </div>
        <div className='...'>{items.author}</div>
        <div className='...'>{items.points}</div>
        <div className='...'>{items.created_at}</div>
        <div className='...'>{items.num_comments}</div>
        </li>)} 
        <div>
        <SearchBox  />
      </div>  
    </ul>
    : <h1>Loading...</h1>
   )
}

