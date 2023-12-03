import Element from "./todoElement";
const todoList = ({itemObj,DeleteBtn}) => {
  return (
    <>
      <ul>
        {itemObj.map((item)=>(<li key={item.work}> <Element itemWork={item.work} itemTime={item.time} DeleteBtn={DeleteBtn}/> </li>))}
      </ul>
    </>
  )
}

export default todoList