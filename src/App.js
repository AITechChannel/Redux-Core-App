import TodoList from "./components/Todolist";
import "antd/dist/antd.css";
import Img from "./components/Img";
import { useSelector } from "react-redux";
function App() {
  return (
    <div className="App">
      <h1>Redux-app</h1>
      <TodoList />

      <Img />
    </div>
  );
}

export default App;
