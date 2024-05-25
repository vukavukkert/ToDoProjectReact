import { useState } from "react";
import Button from "./Button";

interface Props {
  OnCompleteClick: () => void;
  OnDeleteClick: () => void;
  content: string;
  isComplete: boolean;
  key: number;
}

const Task = ({
  OnCompleteClick,
  OnDeleteClick,
  content,
  isComplete = false,
}: Props) => {
  const [taskState, UpdateTaskState] = useState(
    "awaiting-task" || "completed-task"
  );
  return (
    <li
      className={"flex-row-container element-generic-style task " + taskState}
    >
      <Button
        onClick={() => {
          UpdateTaskState("completed-task");
          isComplete = true;
          OnCompleteClick();
        }}
      ></Button>
      <p id="taskContent">{content}</p>
      <Button onClick={OnDeleteClick}>X</Button>
    </li>
  );
};

export default Task;
