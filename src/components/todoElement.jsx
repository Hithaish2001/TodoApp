import { useContext } from "react"
import { Items_context_data } from "../DataStore/items_data"

const todoElement = ({itemWork,itemTime}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {DeleteItem} = useContext(Items_context_data)
  return (
    <>
       <div className="flex w-full h-[150px] bg-slate-600 justify-evenly items-center">
        <p className="w-56 h-12 text-center">{itemWork}</p>
        <p className="w-56 h-12 text-center">{itemTime}</p>
        <button className="bg-red-500 hover:bg-red-600 border-2 border-black rounded-lg w-40 h-14 text-xl" onClick={()=>DeleteItem(itemWork)}>DELETE</button>
       </div>
    </>
  )
}

export default todoElement