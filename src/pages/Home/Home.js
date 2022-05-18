import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Phone from '../../assets/phone.png'
import Graph from '../../assets/graph.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

  

  return (
      <div className=''>
          {/* <div className='absolute top-0 h-screen overflow-hidden opacity-20 -z-10'>
              <img src={Graph} alt='graph.jpg'></img>
          </div> */}
          <Navbar/>
          <div className='container flex items-center justify-between font-Poppins'>
              <div id='content ' className='w-[50%] '>
                  <h1 className='text-6xl font-bold text-gray-700 '><span className='text-bkpurple'>Admin</span> just got easier</h1>
                  <p className='text-sm w-4/5 text-bkgrey mt-5'>welcome to the most effective and efficient admin panel for managing your company, employees, shareholders and customers.</p>
                  <Link to='/signup'><button className='btn btn-purple hover:bg-bkwhite hover:text-bkpurple mt-10'>Get Started</button>  </Link>
              </div>
              <div className='w-[50%] '>
                <img className='mt-32' src={Phone} alt='phone.png'></img>
              </div>
          </div>
    </div>
  )
}

export default Home;