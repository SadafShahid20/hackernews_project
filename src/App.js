
import './App.css';
import NewsList from './Components/newslist';
import SearchBox from './Components/Search';
import {useEffect, useState} from 'react'
import MainLayout from './Hackerlayout/Mainlayout';
import SearchLayout from './Hackerlayout/Searchlayout';
import Search from './Components/Search';
import { Link } from 'react-router-dom';


function App() {
  const [text, setText] = useState('')
 
 function handleChange(e){
  console.log(e.target.value)
  setText(e.target.value)
}

    function handleClick(){
      console.log("Hi click me!", text);
     //<Link to={`/search/:${text}`}></Link>
 }
  
 return (
  <div>
  <NewsList />
  <SearchBox value={text} onChange={handleChange} onClick={handleClick}/>
  </div>
  );
}

export default App;


