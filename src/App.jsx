import Heading from "./components/heading";
import Input from "./components/inputs";
import TodoList from "./components/todoList";
import EmptyMessage from "./components/emptyMessage";
import TodoItemsFunctions from "./DataStore/items_data";


function App() {
  return (
    <TodoItemsFunctions>
      <Heading />
      <Input />
      <EmptyMessage />
      <TodoList />
    </TodoItemsFunctions>
  );
}

export default App;
