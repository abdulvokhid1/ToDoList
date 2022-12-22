import "./App.css";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ToDo />
    </div>
  );
}

export default App;
