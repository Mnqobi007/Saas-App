import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BlogTitles from './Pages/BlogTitles'
import GenerateImages from './Pages/GenerateImages'
import Comunnity from './Pages/Comunnity'
import Layout from './Pages/Layout'
import RemoveBackground from './Pages/RemoveBackground'
import RemoveObject from './Pages/RemoveObject'
import ReviewResume from './Pages/ReviewResume'
import WriteArticle from './Pages/WriteArticle'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ai' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='blog-titles' element={<BlogTitles/>}/>
              <Route path='write-article' element={<WriteArticle/>}/>
              <Route path='generate-images' element={<GenerateImages/>}/>
              <Route path='remove-background' element={<RemoveBackground/>}/>
              <Route path='remove-object' element={<RemoveObject/>}/>
              <Route path='review-resume' element={<ReviewResume/>}/>
              <Route path='community' element={<Comunnity/>}/> 
          </Route>
      </Routes>
    </div>
  )
}

export default App