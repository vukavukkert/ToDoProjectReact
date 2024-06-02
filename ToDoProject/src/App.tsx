import TaskManager from "./components/TaskManager";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cookies from "cookies-ts";
import { useState } from "react";
import "./css/reset.css";
import "./css/style.css";

function App() {
  const cookies = new Cookies();

  const [nameKey, UpdateNameKey] = useState("");

  const getTasks = () => {
    let tasks = cookies.get("taskList") ?? JSON.stringify([]);
    return JSON.parse(tasks);
  };
  const [taskList, UpdateTaskList] = useState(getTasks());

  const onCreateClick = () => {
    if (nameKey.trim() != "") {
      let tasks = taskList;
      tasks.push({ content: nameKey, isComplete: false });
      UpdateTaskList(tasks);
      UpdateNameKey("");
      cookies.set("taskList", JSON.stringify(taskList));
    }
  };
  const DeleteTask = (item: { content: string; isComplete: boolean }) => {
    let tasks = taskList;
    let index = tasks.indexOf(item);
    tasks.splice(index, 1);
    console.log(tasks);
    UpdateTaskList(tasks);
    cookies.set("taskList", JSON.stringify(taskList));
  };
  const CompleteTask = (item: { content: string; isComplete: boolean }) => {
    let tasks = taskList;
    let index = tasks.indexOf(item);
    tasks[index].isComplete = true;
    UpdateTaskList(tasks);
    console.log(tasks);
    cookies.set("taskList", JSON.stringify(taskList));
  };
  const OnDeleteAllClick = () => {
    UpdateTaskList([]);
    cookies.set("taskList", JSON.stringify([]));
  };
  return (
    <>
      <Header>Список дел</Header>
      <TaskManager
        UpdateNameKey={UpdateNameKey}
        onCreateClick={onCreateClick}
        OnDeleteClick={OnDeleteAllClick}
      ></TaskManager>
      <TaskList
        tasks={taskList}
        DeleteTask={DeleteTask}
        CompleteTask={CompleteTask}
      ></TaskList>
      <Footer>link.com</Footer>
    </>
  );
}

export default App;
