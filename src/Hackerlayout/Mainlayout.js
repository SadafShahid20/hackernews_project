
import React from 'react'
import Header from '../Components/Header/Header';
import NewsList from '../Components/newslist';
import SearchBox from '../Components/Search';
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';


export default function Mainlayout() {
    

  return (
    <div className="App">
     
      <Header />
      <Outlet/>
     </div>

  )
}

//const styles = StyleSheet.create({})
