import React, { useEffect } from 'react'
import { BeatLoader  } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';

function Loader() {

  useEffect(()=>{
    setTimeout(() => {
        toast.success("Popup working")
    }, 2000);
  }, [])


  return (
    <div style={{height: "100vh"}}>
      <ToastContainer position="top-center"/>
      <BeatLoader />
    </div>
  )
}

export default Loader
