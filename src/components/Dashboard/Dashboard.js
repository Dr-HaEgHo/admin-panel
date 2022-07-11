import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
        <div className='font-Poppins text-bkwhite flex '>
                <div className=''>
                    <SideBar/>
                </div>
          
            <div id='dash-content' className='w-[77%] absolute top-0 left-[23%]'>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Dashboard section done by-[Awogbuyi Timothy] */}
                
                <div id='dashboard' className='w-full px-4'>
                    <DashHome />
                </div>


                {/* ------------------------------------------------------------------------------------------------------------------------------------------Teams Section done by-[Letam Ugwuadu] */}

                <div id='teams' className='w-full hidden px-4'>
                    <Teams /> 
                </div>
                
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Clients Section Done by-[Please put your name here thank you] */}
                <div id='clients' className='w-full px-4 hidden'>
                    <Clients />
                </div>
                
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Products section done by-[Please put your name here thank you] */}
                <div id='products' className='w-full px-4 hidden'>
                    <Products />
              </div>
          </div>
    </div>
  )
}

export default Dashboard;