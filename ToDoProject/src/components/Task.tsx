import { useState } from "react";
import Button from "./Button";

interface Props {
  OnCompleteClick: () => void;
  OnDeleteClick: () => void;
  content: string;
  isComplete: boolean;
  key: number;
  doRender: boolean;
}

const Task = ({
  OnCompleteClick,
  OnDeleteClick,
  content,
  isComplete,
  doRender = true,
}: Props) => {
  const [taskState, UpdateTaskState] = useState(isComplete);
  const [render, UpdateRender] = useState(doRender);
  if (render) {
    return (
      <li
        className={`flex-row-container element-generic-style task  ${
          taskState == true ? "completed-task" : "awaiting-task"
        }`}
      >
        <Button
          onClick={() => {
            UpdateTaskState(true);
            isComplete = true;
            OnCompleteClick();
          }}
        ></Button>
        <p id="taskContent">{content}</p>
        <Button
          onClick={() => {
            OnDeleteClick();
            UpdateRender(false);
          }}
        >
          X
        </Button>
      </li>
    );
  }
};

export default Task;
