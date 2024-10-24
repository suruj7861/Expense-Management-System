import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '../../App'
export const Layout = ({ children }) => {
    return (
        <>
        <ProtectedRoute/>
         <Header />
         <div className='content'>
         <Outlet/>
        </div>
        <Footer />
        
        </>
    )
}
