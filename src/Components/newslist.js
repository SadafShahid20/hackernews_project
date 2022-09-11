
import React from 'react'
import {useEffect, useState} from 'react'


export default function NewsList({searchText}) {
    const [news, setNews] = useState([])
    const [text, setText] = useState(searchText)
    useEffect(() => {

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

