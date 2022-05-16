import React from 'react'
import Graph1 from '../../assets/graph1.jpg'
import Cap from '../../assets/nike-cap.jpg'
import Nike from '../../assets/nike1.webp'
import Fila from '../../assets/fila.jpg'

const DashHome = () => {

  const topProds = [
    {id:'1', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'2', image:Nike, title:'Nike Air sneakers', price: 3000},
    {id:'3', image:Cap, title:'Nike baseball cap', price: 500},
    {id:'4', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'5', image:Nike, title:'Nike Air sneakers', price: 3000},
    {id:'6', image:Cap, title:'Nike baseball cap', price: 500},
    {id:'7', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'8', image:Nike, title:'Nike Air sneakers', price: 3000},
  ];

  return (
    <div className='font-Poppins'>
      <div className='flex justify-between pt-6 items-end'>
        <h2 className='text-xl font-semibold w-[65%] text-bkdeepblue'>Overview</h2>
        <div className='flex w-[33%] items-center gap-2 justify-end'>
          <div className='text-[9px] text-bkdeepblue font-semibold bg-white border shadow-sm border-bkgrey py-2 px-4 rounded flex items-center gap-4'>22 July 2022<i className='fa fa-calendar'></i></div>
          <p className='text-bkdeepblue font-semibold'> - </p>
          <div className='text-[9px] text-bkdeepblue font-semibold bg-white border shadow-sm border-bkgrey py-2 px-4 rounded flex items-center gap-4'>22-july-2022<i className='fa fa-calendar'></i></div>
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <div className='w-[65%] max-h-[80vh] bg-green-300 mb-2 flex flex-col gap-5'>
          <div className='flex justify-between'> 
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>Total Profit</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$95,250</p>
                <span className='text-xs text-green-400'>+3.55%</span>
              </div>
            </div>
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>Total Expenses</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$20,000</p>
                <span className='text-xs text-green-400'>+2.67%</span>
              </div>
            </div>
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>New Users</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$1,951</p>
                <span className='text-xs text-red-400'>-9.89%</span>
              </div>
            </div>
          </div>
          <div className='w-full p-4 shadow-sm bg-white '>
            <div className='flex  justify-between text-bkdeepblue'>
              <h2 className='font-bold '>Sales Report</h2>
              <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                  <div className='w-[15px] h-[15px] bg-bkdeepblue'></div>
                  <p className='text-xs font-semibold'>Incomes</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-[15px] h-[15px] bg-bkpurple'></div>
                  <p className='text-xs font-semibold'>Expenses</p>
                </div>
              </div>
            </div>
            <img className='w-full pb-3' src={Graph1} alt='graph-analytics.jpg'></img>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------Top Products */}
        <div className='w-[33%] h-[80vh] bg-white shadow-sm rounded '>
          <div className=' py-5 px-4 w-full border-b'>
            <h2 className='font-semibold text-bkdeepblue '>Top Selling Products</h2>
          </div>
          <div>
            {
              topProds && topProds.map((topProd) => 
                <div className=' px-4 py-2 flex border-b items-center text-bkdeepblue justify-between'>
                  <div className='w-[40px] h-[40px] rounded overflow-hidden '>
                    <img src={topProd.image}></img>
                  </div>
                  <h3 className='flex-1 font-semibold text-sm ml-2'>{ topProd.title }</h3>
                  <p> ${ topProd.price }</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashHome;