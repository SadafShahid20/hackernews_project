import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchList from './Searchlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/Mainlayout';
import SearchLayout from './Layouts/Searchlayout';
import New from './Components/Header/New';
import Comments from './Components/Header/Comments';
import Jobs from './Components/Header/Jobs';
import Submit from './Components/Header/Submit';
import NewsList from './Components/newslist';
import SearchBox from './Components/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

      <Route element={<MainLayout />}>
      <Route path='/' element={<NewsList />} />
    
         <Route path='/new' element={<New />} />
          <Route path='/comments' element={<Comments/>} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/submit' element={<Submit/>} />

      </Route>
      
      <Route element={<SearchLayout />}>
          <Route path='/search/:sText' element={<SearchList />} />
      </Route>
      
  </Routes>
</BrowserRouter>
);

