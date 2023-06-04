const Filter = ({ countActiveTasks, setFilter, handleClearCompleted }) => {
  return (
    <div className="footer">
      <span>Remaining Tasks: {countActiveTasks()}</span>
      <button className="All" onClick={() => setFilter("All")}>
        All
      </button>
      <button className="Active" onClick={() => setFilter("Active")}>
        Active
      </button>
      <button className="Completed" onClick={() => setFilter("Completed")}>
        Completed
      </button>
      <button className="ClearCompleted" onClick={() => handleClearCompleted()}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
