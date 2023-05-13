import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import Recent from "./components/Recent";
import Table from "./components/Table";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    toast.success("Dies ist nur im Anzeigemodus");
  }, []);

  return (
    <>
      <div className="bg-black h-screen w-full px-4">
        <Header />
        <Transaction />
        <Recent />
        <Table />
        <Navbar />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
