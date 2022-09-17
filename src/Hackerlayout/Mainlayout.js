
import React from 'react'
import NewsList from '../Components/newslist';
import SearchBox from '../Components/Search';
import {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

export default function Mainlayout() {
    

  return (
    <div className="App">
        <Header />
        <Outlet/>
     </div>

  )
}

//const styles = StyleSheet.create({})
