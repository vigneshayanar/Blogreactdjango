import React from 'react'
import Navbar from '../compounds/Navbar'
import Footer from '../compounds/Footer'
import { Outlet, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mainlayout = () => {
  return (
    <>
    <Navbar/>
    <ToastContainer />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Mainlayout