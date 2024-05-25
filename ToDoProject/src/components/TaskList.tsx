import Task from "./Task";

interface Props {
  tasks: [{ content: string; isComplete: boolean }];
  UpdateTaskList: ([]) => void;
}
const TaskList = ({ tasks, UpdateTaskList }: Props) => {
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
                  OnCompleteClick={() => {}}
                  OnDeleteClick={() => {
                    console.log(index);
                    tasks.splice(index, 1);
                    UpdateTaskList(tasks);
                    console.log(tasks);
                  }}
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
