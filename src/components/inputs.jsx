/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from "react";
const inputs = ({submitValues}) => {

  const [newWork, setWork] =  useState("")
  const [newTime, setTime] =  useState("")

  const workFunc=(event)=>{
    setWork(event.target.value);
  }
  const timeFunc=(event)=>{
    setTime(event.target.value);
  }
  
  const addButtonClicked=()=>{
    submitValues(newWork,newTime);
    setWork("");
    setTime("");
  }

  return (
    <>
      <div className="justify-evenly items-center flex bg-slate-500 w-full h-[150px]">
        <input type="text" placeholder="Enter here" value={newWork} className="p-3 w-56 h-12 border-2 border-black rounded-lg" onChange={workFunc}/>
        <input type="date" placeholder="Enter here" value={newTime} className="p-3 w-56 h-12 border-2 border-black rounded-lg" onChange={timeFunc}/>
        <button onClick={addButtonClicked} className="bg-indigo-500 hover:bg-indigo-600 border-2 border-black rounded-lg w-40 h-14 text-xl">ADD</button>
      </div>
    </>
  )
}

export default inputs