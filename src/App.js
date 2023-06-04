import { useState } from "react";
import "./styles.css";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import AddInput from "./components/AddInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("All");

  //Adding task
  const handleAddTask = () => {
    setTodos([
      ...todos,
      { task: inputTodo, id: Date.now().toString(), isCompleted: false }
    ]);
    setInputTodo("");
  };

  //Deleting task
  const handleDeleteTask = (deletedTodoId) => {
    const updatedTodo = todos.filter((todo) => todo.id !== deletedTodoId);
    setTodos(updatedTodo);
  };

  //Marking task as complete or incomplete
  const toggleCompletedTask = (taskId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //Adding filters
  const handleFilter = () => {
    if (filter === "Active")
      return todos.filter((todo) => todo.isCompleted === false);
    else if (filter === "Completed")
      return todos.filter((todo) => todo.isCompleted === true);
    else return todos;
  };

  //Clear completed tasks
  const handleClearCompleted = () => {
    const activeTodo = todos.filter((todo) => todo.isCompleted === false);
    setTodos(activeTodo);
  };

  //Count of active tasks
  const countActiveTasks = () => {
    const activeTodo = todos.filter((todo) => todo.isCompleted === false);
    return activeTodo.length;
  };

  return (
    <div>
      <div className="Todo">
        <div className="Maintext">TODO APP</div>
        <AddInput
          setInputTodo={setInputTodo}
          inputTodo={inputTodo}
          handleAddTask={handleAddTask}
        />

        <TaskList
          handleFilter={handleFilter}
          toggleCompletedTask={toggleCompletedTask}
          handleDeleteTask={handleDeleteTask}
        />

        <Filter
          countActiveTasks={countActiveTasks}
          setFilter={setFilter}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}
