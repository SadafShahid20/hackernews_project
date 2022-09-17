<BrowserRouter>
   <Routes>
   <Route element={<MainLayout />}>
        
         <Route path='/' element={<App />}/>
     </Route>
        <Route element={<SearchLayout />}>
        
         <Route path='/search/:text' element={<SearchList />}/>
        </Route>
        
   </Routes>
   </BrowserRouter>