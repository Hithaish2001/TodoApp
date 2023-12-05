/* eslint-disable react-hooks/rules-of-hooks */
import {useContext, useRef} from "react";
import { Items_context_data } from "../DataStore/items_data";
const inputs = () => {

  const {AddItem} = useContext(Items_context_data)

  const nameUpdate = useRef()
  const dateUpdate = useRef()

  const addButtonClicked=(event)=>{
    event.preventDefault();
    const newName = nameUpdate.current.value;
    const newDate = dateUpdate.current.value;
    nameUpdate.current.value ="";
    dateUpdate.current.value ="";
    AddItem(newName,newDate);
  }

  return (
    <>
      <form onSubmit={addButtonClicked} className="justify-evenly items-center flex bg-slate-500 w-full h-[150px]">
        <input type="text" placeholder="Enter here" ref={nameUpdate} className="p-3 w-56 h-12 border-2 border-black rounded-lg" />
        <input type="date" placeholder="Enter here" ref={dateUpdate} className="p-3 w-56 h-12 border-2 border-black rounded-lg" />
        <button className="bg-indigo-500 hover:bg-indigo-600 border-2 border-black rounded-lg w-40 h-14 text-xl">ADD</button>
      </form>
    </>
  )
}

export default inputs