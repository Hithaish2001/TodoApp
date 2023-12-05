import { Items_context_data } from "../DataStore/items_data";
import Element from "./todoElement";
import { useContext } from "react";

const todoList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {itemArray,DeleteItem} = useContext(Items_context_data)
  return (
    <>
      <ul>
        {itemArray.map((item)=>(<li key={item.work}> <Element itemWork={item.work} itemTime={item.time} DeleteItem={DeleteItem}/> </li>))}
      </ul>
    </>
  )
}

export default todoList