import {BsFillArrowDownRightCircleFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs'

export default function Table() {
  return (
    <div className="flex flex-col text-white my-4 overflow-scroll bg-black">
    <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowUpRightCircleFill fill='purple' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>To Jin <span className='text-gray-500'>. Work</span></h1>
            <h1 className='text-sm text-gray-400'>12 june 2022</h1>
         </div>
        </div>
      <div className="amount">
         <p>-$58</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>To Jin <span className='text-gray-500'>. Work</span></h1>
            <h1 className='text-sm text-gray-400'>12 june 2022</h1>
         </div>
        </div>
      <div className="amount">
         <p>-$58</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowUpRightCircleFill fill='purple' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>To Jin <span className='text-gray-500'>. Work</span></h1>
            <h1 className='text-sm text-gray-400'>12 june 2022</h1>
         </div>
        </div>
      <div className="amount">
         <p>-$100</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>To Jin <span className='text-gray-500'>. Work</span></h1>
            <h1 className='text-sm text-gray-400'>12 june 2022</h1>
         </div>
        </div>
      <div className="amount">
         <p>-$100</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>To Jin <span className='text-gray-500'>. Work</span></h1>
            <h1 className='text-sm text-gray-400'>12 june 2022</h1>
         </div>
        </div>
      <div className="amount">
         <p>-$100</p>
       </div>
       </div>
       <hr />
       
    </div>
  )
}
