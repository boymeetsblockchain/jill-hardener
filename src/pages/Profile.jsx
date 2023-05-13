import { useEffect } from "react";
import toast  from "react-hot-toast";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import Table from "../components/Table";
import Transaction from "../components/Transaction";
export default function Profile() {
    useEffect(() => {
        toast.success("Dies ist nur im Anzeigemodus");
      }, []);
  return (
    <>
     <Header/>
     <Transaction/>
     <Recent/>
     <Table/>
     <Navbar/>
    </>
  )
}
