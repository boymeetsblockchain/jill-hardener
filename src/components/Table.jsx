import {BsFillArrowDownRightCircleFill,BsFillArrowUpRightCircleFill} from 'react-icons/bs'

export default function Table() {
  return (
    <div className="flex flex-col text-white my-4  text-lg overflow-scroll bg-black">
    <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
         < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>Von Unternehmen<span className='text-gray-500'>Geschäft</span></h1>
            <h1 className='text-sm text-gray-400'>12 April,2023</h1>
         </div>
        </div>
      <div className="amount">
         <p>€60,000</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'> Von Gehalt<span className='text-gray-500'>.Arbeit</span></h1>
            <h1 className='text-sm text-gray-400'>29 Marz,2023</h1>
         </div>
        </div>
      <div className="amount">
         <p>€10,000</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowDownRightCircleFill fill='green' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'>Von Innovationswerkstatt AG <span className='text-gray-500'>.Geschäft</span></h1>
            <h1 className='text-sm text-gray-400'>20 Marz,2023</h1>
         </div>
        </div>
      <div className="amount">
         <p>€10,000</p>
       </div>
       </div>
       <hr />
       <div className="flex justify-between items-center mb-2">
       <div className="profile flex  gap-1">
         <div className="img">
            < BsFillArrowUpRightCircleFill fill='purple' size={32} />
         </div>
         <div className="name-good">
            <h1 className='text-sm mb-1'> Zu Neues Horizonte Start-up GmbH <span className='text-gray-500'>.Geschäft</span></h1>
            <h1 className='text-sm text-gray-400'>10 Marz,2023</h1>
         </div>
        </div>
      <div className="amount">
         < p>€10,000</p>
       </div>
       </div>
       <hr />
    </div>
  )
}
