import { FaCreditCard } from 'react-icons/fa';
import { BiTransferAlt } from 'react-icons/bi';
import { TbSmartHome } from 'react-icons/tb';
import { BsPersonFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const onClick = () => {
    toast.error('Nicht autorisiert');
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 px-6 py-4 text-white bg-black rounded-md'>
      <ul className="flex flex-row justify-between">
        <div className="home flex flex-col items-center hover:border-t-2 border-lime-300">
          <TbSmartHome size={24} className='hover:text-lime-300 mt-1' />
          <h2><Link to='/'>Startseite</Link></h2>
        </div>
        <div className="home flex flex-col items-center hover:border-t-2 border-lime-300" onClick={onClick}>
          <FaCreditCard size={24} className='hover:text-lime-300 mt-1' />
          <h2>Karte</h2>
        </div>
        <div className="home flex flex-col items-center hover:border-t-2 border-lime-300" onClick={onClick}>
          <BiTransferAlt size={24} className='hover:text-lime-300 mt-1' />
          <h2>Transaktion</h2>
        </div>
        <div className="home flex flex-col items-center hover:border-t-2 border-lime-300" onClick={onClick}>
          <BsPersonFill size={24} className='hover:text-lime-300 mt-1' />
          <h2>Profil</h2>
        </div>
      </ul>
    </nav>
  );
}
