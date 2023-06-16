import { BsFillBellFill } from 'react-icons/bs';
import profile from '../assets/profile.jpg';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Header() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const getCurrentTimeOfDay = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('Morgen');
      } else if (currentHour >= 12 && currentHour < 18) {
        setTimeOfDay('Nachmittag');
      } else {
        setTimeOfDay('Abend');
      }
    };

    getCurrentTimeOfDay();
  }, []);

  const onClick = () => {
    toast.success('Keine neuen Benachrichtigungen');
  };

  return (
    <div className='text-white px-2 py-10'>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="profile flex gap-1">
            <div className="img">
              <img src={profile} alt="" className='h-12 w-12 rounded-lg' />
            </div>
            <div className="name-good">
              <h1 className='text-sm mb-1'>Jill Hardener</h1>
              <h1 className='text-sm text-gray-400'>Guten {timeOfDay}</h1>
            </div>
          </div>
          <div className="bell">
            <BsFillBellFill size={24} className='text-white hover:text-lime-300' onClick={onClick} />
          </div>
        </div>
        <div className="balance flex flex-col my-6 gap-3">
          <p className='text-sm text-gray-400'>Gesamtsaldo:</p>
          <h1 className='text-lime-300 text-2xl'> €1,000,000 EUR</h1>
          <p className='text-red-400 text-[8px]'>Konto eingeschränkt, bitte kontaktieren Sie das Management</p>
        </div>
        <hr className='text-gray-400' />
      </div>
    </div>
  );
}