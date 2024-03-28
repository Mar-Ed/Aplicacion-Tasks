import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskname, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskname);
    // localStorage.setItem("tasks", newTaskname); //guardar datos en el navegador en react
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        values={newTaskname}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Save Task</button>
    </form>
  );
}; 