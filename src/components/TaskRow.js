export const TaskRow = ({task, toogleTask}) => {  //recibe una propieda por eso va entre llaves
  return (
    <tr key={task.name}>
      <td>
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          onChange={() => toogleTask={task}}
        />
      </td>
    </tr>
  );
};
