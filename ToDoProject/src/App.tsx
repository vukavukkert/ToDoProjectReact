import TaskManager from "./components/TaskManager";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cookies from "cookies-ts";
import { useState } from "react";
import "./css/reset.css";
import "./css/style.css";

interface Task {
  content: string;
  IsComplete: boolean;
}

function App() {
  const cookies = new Cookies();

  const [nameKey, UpdateNameKey] = useState("");
  const getTasks = () => {
    let tasks = cookies.get("taskList") ?? JSON.stringify([]);
    return JSON.parse(tasks);
  };
  const [taskList, UpdateTaskList] = useState(getTasks());

  const onCreateClick = () => {
    let tasks = taskList;
    tasks.push({ content: nameKey, isComplete: false });
    UpdateTaskList(tasks);
    UpdateNameKey("");
  };
  const OnDeleteAllClick = () => {};
  return (
    <>
      <Header>Список дел</Header>
      <TaskManager
        UpdateNameKey={UpdateNameKey}
        onCreateClick={onCreateClick}
        OnDeleteClick={OnDeleteAllClick}
      ></TaskManager>
      <TaskList tasks={taskList}></TaskList>
      <Footer>link.com</Footer>
    </>
  );
}

export default App;
