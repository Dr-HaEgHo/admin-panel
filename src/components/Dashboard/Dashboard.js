import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageNotFound from '../../pages/PageNotFound'
import DashHome from '../Home/DashHome'
import Clients from './Clients/Clients'
import Products from './Products/Products'
import SideBar from './SideBar/SideBar'
import Teams from './Teams/Teams'

const Dashboard = () => {

    
  
    // Disabled the back button so user can't go back to the dashboard after log out
    // const disableBackButton = () => {
    //     window.history.forward();
    // }
    // setTimeout( disableBackButton(), 0);
    
    // window.addEventListener('load', disableBackButton)
    

    
    
    


    return ( 
        <div className='font-Poppins text-bkwhite'>
            <div className=''>
                <SideBar/>
            </div>
          {/* ---------------------------------------------------- flex */}
            <div id='dash-content' className='w-[77%] absolute top-0 left-[23%]'>
                
                <div className='w-full px-4'>
                    {
                        window.location.pathname === "/dashboard" || window.location.pathname === "/dashboard/" ? <DashHome/> : <PageNotFound/> &&
                        window.location.pathname === "/dashboard/teams" ? <Teams/> : <PageNotFound/> &&
                        window.location.pathname === "/dashboard/clients" ? <Clients/> : <PageNotFound/> &&
                        window.location.pathname === "/dashboard/products" ? <Products/> : <PageNotFound/>
                    }
                </div>

          </div>
    </div>
  )
}

export default Dashboard;
            //     <div id='teams' className='w-full hidden px-4'>
            //         <Teams /> 
            //     </div>
                
            //     <div id='clients' className='w-full px-4 hidden'>
            //         <Clients />
            //     </div>
                
            //     <div id='products' className='w-full px-4 hidden'>
            //         <Products />
            //   </div>