import Task from "./Task";

interface Props {
  tasks: [{ content: string; isComplete: boolean }];
  DeleteTask: (item: { content: string; isComplete: boolean }) => void;
  CompleteTask: (item: { content: string; isComplete: boolean }) => void;
}
const TaskList = ({ tasks, DeleteTask, CompleteTask }: Props) => {
  return (
    <>
      <div className="flex-center-container">
        <div className="flex-column-container">
          <ul id="tasks">
            {tasks.map((item, index) => {
              return (
                <Task
                  content={item.content}
                  isComplete={item.isComplete}
                  OnCompleteClick={() => CompleteTask(item)}
                  OnDeleteClick={() => DeleteTask(item)}
                  doRender={true}
                  key={index}
                ></Task>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskList;
