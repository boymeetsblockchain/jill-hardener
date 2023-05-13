import { MdOutlineSendToMobile, MdEuro } from 'react-icons/md';
import { BsGridFill } from 'react-icons/bs';
import toast from 'react-hot-toast';

export default function Transaction() {
    const onClick = () => {
        toast.error("Nicht autorisiert");
    };

    return (
        <div className="flex flex-row justify-between text-white">
            <div className="home flex flex-col items-center">
                <MdOutlineSendToMobile size={32} onClick={onClick} className="hover:text-lime-300 mt-1 rounded-full bg-transparent mb-4" />
                <h2>Überweisung</h2>
            </div>
            <div className="home flex flex-col items-center">
                <MdEuro size={32} onClick={onClick} className="hover:text-lime-300 mt-1 rounded-full bg-transparent mb-4" />
                <h2>Geld hinzufügen</h2>
            </div>
            <div className="home flex flex-col items-center">
                <BsGridFill size={32} onClick={onClick} className="hover:text-lime-300 mt-1 rounded-full bg-transparent mb-4" />
                <h2>Mehr</h2>
            </div>
        </div>
    );
}
