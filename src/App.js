
import './App.css';
import NewsList from './Components/newslist';
import SearchBox from './Components/Search';
import {useEffect, useState} from 'react'
import MainLayout from './Hackerlayout/Mainlayout';
import SearchLayout from './Hackerlayout/Searchlayout';
import Search from './Components/Search';
import { Link } from 'react-router-dom';


function App() {
    
    const [searchText, setSearchText] = useState('')
    const [stext, setStext] = useState('')
    
    
   
     function  handleChange (e) {
      console.log("app search value: ", e.target.value);
      setStext(e.target.value)
     }
  
 return (
    <div className="App">
      <NewsList stext={searchText} aa={()=>console.log({searchText})} />
      <SearchBox stext = {stext} onChange={handleChange}/>
    </div>
  );
}

export default App;


