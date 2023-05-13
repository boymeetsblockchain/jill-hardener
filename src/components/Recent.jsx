import React from 'react'
import toast from 'react-hot-toast'
export default function Recent() {
    const onClick = ()=>{
        toast.error("unable to fetch transactions")
    }
  return (
     <div className="text-white  mt-5  flex gap-2 rounded-lg mb-5  flex-col">
         <h1 className='font-semibold text-lg'>Recent Activity:</h1>
         <div className="recent-buttons">
             <ul className='flex justify-between gap-2 text-sm '>
                <li onClick={onClick} className="p-2 rounded-lg  hover:bg-lime-600">This Day</li>
                <li  onClick={onClick}  className="p-2 rounded-lg">This Week</li>
                <li onClick={onClick} className='p-2 rounded-lg  hover:bg-lime-600'>This Month</li>
                <li  className="p-2 rounded-lg  bg-lime-600 ">6 Months</li>
             </ul>
         </div>
     </div>
  )
}
