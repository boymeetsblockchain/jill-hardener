import React from 'react';
import toast from 'react-hot-toast';

export default function Recent() {
  const onClick = () => {
    toast.error("Transaktionen konnten nicht abgerufen werden");
  };

  return (
    <div className="text-white mt-5 flex gap-2 rounded-lg mb-5 flex-col">
      <h1 className='font-semibold text-lg'>Aktuelle Aktivitäten:</h1>
      <div className="recent-buttons">
        <ul className='flex justify-between gap-2 text-xs'>
          <li onClick={onClick} className="p-2 rounded-lg hover:bg-lime-600">Heute</li>
          <li onClick={onClick} className="p-2 rounded-lg">Diese Woche</li>
          <li onClick={onClick} className='p-2 rounded-lg hover:bg-lime-600'>Dieser Monat</li>
          <li className="p-2 rounded-lg bg-lime-600">6 Monate</li>
        </ul>
      </div>
    </div>
  );
}
