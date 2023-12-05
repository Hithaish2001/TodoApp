import { createContext, useReducer } from "react";

export const Items_context_data = createContext({
  itemArray: [],
  AddItem: () => {},
  DeleteItem: () => {},
});




const ReducerFunc = (currArray, action)=>{
  let newArray = currArray;
  if (action.type === "ADD_ITEM") {
    newArray = [...currArray,{work: action.payload.newWork, time: action.payload.newTime}];
  } else if(action.type === "DELETE_ITEM"){
    newArray = currArray.filter((item) => item.work !== action.payload.itemWork);
   }
  return newArray;
}



const todoItemsFunctions = ({children})=>{
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [itemArray, dispatchItems] = useReducer(ReducerFunc, [])


  const AddItem = (newWork, newTime) => {
    const AddAction = {
      type : "ADD_ITEM",
      payload : {
        newWork,
        newTime
      }
    };
    dispatchItems(AddAction);
  };


  const DeleteItem = (itemWork) => {
    const DeleteAction = {
      type : "DELETE_ITEM",
      payload : {
        itemWork
      }
    };
    dispatchItems(DeleteAction);
  };

  return (
    <Items_context_data.Provider value={{ itemArray, AddItem, DeleteItem }}>
      {children}
    </Items_context_data.Provider>
  )
}

export default todoItemsFunctions;