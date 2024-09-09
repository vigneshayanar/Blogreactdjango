import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compounds/Navbar'
import Jumbotron from './compounds/Jumbotron'
import Blogheader from './compounds/Blogheader'
import Blogcontent from './compounds/Blogcontent'
import { Container } from 'postcss'
import Containerbag from './compounds/Containerbag'
import Footer from './compounds/Footer'
import {createBrowserRouter,RouterProvider,Route,Link, createRoutesFromElements,} from "react-router-dom";
import Mainlayout from './pages/Mainlayout'
import Homepage from './pages/Homepage'
import Addblogpage from './pages/Addblogpage'
import Details from './pages/Details';
import Notfound from './pages/Notfound';
import Editblogpage from './pages/Editblogpage'
import Modal from './pages/Modal'
import axios from 'axios'
import {toast } from 'react-toastify';

function App() {
  const createblog=(data)=>{
    axios.post("https://blogreactdjango-3.onrender.com/blog/",data)
    .then(res=> {console.log(data)
        toast.success("Blog added successfully")
    })
    
    .catch(err=> console.log(err.message))
  }
 

  const editblog=(data)=>{
    console.log(data)
    toast.success("Blog editedsuccessfully")
  }
  const del=()=>{
    toast.success("Blog has been succesfully deleted")
  }
const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Mainlayout/>} errorElement={<Notfound/>}>
    <Route index element={<Homepage/>}/>
    <Route path='/add-blog' element={<Addblogpage createblog={createblog}/>}/>
    <Route path='/blog-slug' element={<Details/>}/>
    <Route path='/blog/:slug' element={<Details del={del}/>}/>
    <Route path='/blog-slug/edit/:slug' element={<Editblogpage editblog={editblog} />}/>
    <Route path='' element={<Modal/>}/>
  </Route>,
  <Route path='*' errorElement={<Notfound/>}>
  </Route>
  </>
  ));
  return (
    <RouterProvider router={router}/>
  )
}

export default App
