import Task from "./Task";

interface Props {
  tasks: [{ content: string; isComplete: boolean }];
}
const TaskList = ({ tasks }: Props) => {
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
                  OnDeleteClick={() => {}}
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
