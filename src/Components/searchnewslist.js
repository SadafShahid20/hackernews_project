
import React from 'react'
import {useEffect, useState} from 'react'
import Search from './Search';
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";


export default function SearchNewsList({stext}) {
    const [news, setNews] = useState([])

    console.log ("hello from Searchnewlist", stext)
    useEffect(() => {
      console.log ("hello from Searchnewslist2, settext value", stext)
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
          const data2= data.hits
          data2.filter(item=>{return !item.title})

          console.log("🚀 ~ data", data2)
          setNews( data2)
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
     ?<ul className ="grid grid-rows-20 gap-5">
      {news.map((items, idx) => <li key = {items.objectID} className ="grid grid-cols-4 gap-3">
            <a href={items.url} className="col-span-5 ..." target="_blank" rel="noopener noreferreer">
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[`${stext}`]}
                    autoEscape={true}
                    textToHighlight= {items.title||""?items.title:""}
                />
            </a>
            <div>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[`${stext}`]}
                    autoEscape={true}
                    textToHighlight= {items.author||""?items.author:""}
                />
            </div>
            <div>{items.points}</div>
            <div>{items.created_at}</div>
            <div>{items.num_comments}</div>
            <div className ="bg-green-500 font-bold"></div> 
        </li>)}
        
    </ul>
    : <h1>Loading...</h1>
   )
}

