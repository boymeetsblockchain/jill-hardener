
import  { Toaster } from 'react-hot-toast';

import { Route,Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

export default function App() {


  return (
    <>
      <div className="bg-black h-screen w-full px-4">
        <Routes>
          <Route path='/' element ={<SignIn/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
