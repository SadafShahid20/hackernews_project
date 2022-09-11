
import './App.css';
import NewsList from './Components/newslist';
import SearchBox from './Components/Search';
import {useEffect, useState} from 'react'


function App() {
  const [searchText, setSearchText] = useState('')
 function  handleClick (text) {
  setSearchText(text)
    console.log(text);
 }

 return (
    <div className="App">
   <NewsList text={searchText} />
   <SearchBox onClick = {handleClick}/>
    </div>
  );
}

export default App;


