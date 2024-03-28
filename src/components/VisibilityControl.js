export const VisibilityControl = ({setshowCompleted}) => {
  const handleDelete = () =>{
    alert("limpiando")
  }
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setshowCompleted(e.target.checked)}
      />{ " "}
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};
