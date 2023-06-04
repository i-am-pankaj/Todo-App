const TaskList = ({ handleFilter, toggleCompletedTask, handleDeleteTask }) => {
  return (
    <div>
      {handleFilter().length > 0 ? (
        handleFilter().map((todo, index) => (
          <div className="taskList" key={index}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleCompletedTask(todo.id)}
            />
            <span>{todo.task}</span>
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No task to show</p>
      )}
    </div>
  );
};

export default TaskList;
