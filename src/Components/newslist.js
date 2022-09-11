
import React from 'react'
import {useEffect, useState} from 'react'


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
     ?<ul>
      {news.map((items, idx) => <li key = {items.objectID}>
        <a href = {items.url}>{items.title}</a>
        <span>{items.author}</span>
        <span>{items.points}</span>
        <span>{items.created_at}</span>
        <span>{items.num_comments}</span>
        </li>)}
    </ul>
    : <h1>Loading...</h1>
   )
}

