import Heading from "./components/heading";
import Input from "./components/inputs";
import TodoList from "./components/todoList";
import EmptyMessage from "./components/emptyMessage";
import {useState} from "react";
function App() {
  const initialArray=[]

  const [itemArray, setitemArray] = useState(initialArray)

  const HandleArray =(newWork,newTime) =>{
    const newArray = [...itemArray,{work:newWork,time:newTime}]
    setitemArray(newArray)
  }

  const HandleDeleteBtn=(itemWork)=>{
    const newArray2 = itemArray.filter( item => item.work !== itemWork);
    setitemArray(newArray2);
  }


  return (
    <>
      <Heading/>
      <Input submitValues={HandleArray}/>
      {itemArray.length===0 && <EmptyMessage/>}
      <TodoList itemObj={itemArray} DeleteBtn={HandleDeleteBtn}/>
    </>
  )
}

export default App
