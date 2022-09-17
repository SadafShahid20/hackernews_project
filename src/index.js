import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchList from './Searchlist';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './Layouts/Mainlayout';
import SearchLayout from './Layouts/Searchlayout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

      <Route element={<MainLayout />}>
          <Route path='/' element={<App />}/>
      </Route>
      
      <Route element={<SearchLayout />}>
          <Route path='/search/:sText' element={<SearchList />} />
      </Route>
      
  </Routes>
</BrowserRouter>
);
