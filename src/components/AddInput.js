const AddInput = ({ setInputTodo, inputTodo, handleAddTask }) => {
  return (
    <div className="addinput">
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
        placeholder="Creat task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddInput;
