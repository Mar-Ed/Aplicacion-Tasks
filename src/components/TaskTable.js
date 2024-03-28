import { TaskRow } from "./TaskRow";
export const TaskTable = ({ tasks , toogleTask, showCompleted = false}) => {
  const TaskTableRows = (doneValue) =>{

    
    return (
      tasks
      .filter(task=>task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toogleTask}/>
      ))
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          TaskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
};
