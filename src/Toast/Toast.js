import { useEffect, useState } from "react";
import './Toast.css'

const ToastFunc=({handleToast})=>{
  useEffect(()=>{
   const time= setTimeout(()=>{
        handleToast()
    },5000)
 return ()=>clearTimeout(time);
  },[handleToast])

  return (<>
  <div className="toast">
    Toast message we are going to show!!
  </div>
  </>)
}

const Toast=()=>{
    const [show,setShow]=useState(false)

    const handleToast=()=>{
        setShow(prev=>!prev)
    }
    
    return(<>
    <button onClick={handleToast}>{show?"Hide Toast":"Show toast"}</button>
     {show&&<ToastFunc handleToast={handleToast}></ToastFunc>}
    </>)
}

export default Toast;