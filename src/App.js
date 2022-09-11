
import './App.css';
import NewsList from './Components/newslist';
import SearchBox from './Components/Search';
import {useEffect, useState} from 'react'


function App() {
    
    const [searchText, setSearchText] = useState('')
    const [sText, setSText] = useState('')
    
    
    function  handleClick () {
      console.log("clicked make search with:",sText);
      setSearchText(sText)
     }
   
     function  handleChange (e) {
      console.log(e.target.value);
      setSText(e.target.value)
     }
  
 return (
    <div className="App">
      <NewsList stext={searchText} aa={()=>console.log({searchText})} />
      <SearchBox onClick = {handleClick} onChange={handleChange} />
    </div>
  );
}

export default App;


