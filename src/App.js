import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import  { Toaster } from 'react-hot-toast';
export default function App() {
  return (
   <>
    <div className="bg-black h-screen w-full px-4">
      <Header/>
      <Navbar/>
      <Transaction/>
    </div>
    <Toaster   position="top-center"
  reverseOrder={false}/>
   </>
  )
}
