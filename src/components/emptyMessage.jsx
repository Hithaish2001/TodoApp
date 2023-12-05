import { useContext } from "react"
import { Items_context_data } from "../DataStore/items_data"


const emptyMessage = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {itemArray} = useContext(Items_context_data);
  return (
    <>
        {itemArray.length === 0 && <h1 className="text-center text-4xl font-semibold">Have a great day</h1>}
    </>
  )
}

export default emptyMessage