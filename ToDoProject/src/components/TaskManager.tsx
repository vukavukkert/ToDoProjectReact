import Button from "./Button";
import { useState } from "react";

Button;
interface Props {
  nameKey?: string;
  UpdateNameKey: (k: string) => void;
  onCreateClick: () => void;
  OnDeleteClick: () => void;
}
const TaskManager = ({
  nameKey = "",
  UpdateNameKey,
  onCreateClick,
  OnDeleteClick,
}: Props) => {
  const [value, updateValue] = useState("");
  return (
    <>
      <div className="flex-center-container">
        <div className="flex-row-container element-generic-style input-element">
          <input
            type="text"
            placeholder="Новый элемент списка"
            id="content"
            value={value}
            onChange={(event) => {
              UpdateNameKey(event.target.value);
              updateValue(event.target.value);
            }}
          />
          <Button
            type="createButton"
            onClick={() => {
              onCreateClick();
              updateValue("");
            }}
          >
            Создать
          </Button>
          <Button type="clearButton" onClick={OnDeleteClick}>
            Очистить все
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskManager;
