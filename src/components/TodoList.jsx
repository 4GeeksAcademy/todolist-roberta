import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks([...tasks, { text: input.trim(), isDone: false }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTask}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.isDone ? "done" : ""}>
            <span onClick={() => toggleTaskDone(index)} className="task-text">
              {task.isDone ? "✔️ " : ""}
              {task.text}
            </span>
            <button onClick={() => handleDelete(index)} className="delete-button">❌</button>
          </li>
        ))}
      </ul>
      <div className="task-count">
        {tasks.length === 0
          ? "No tasks, add a task"
          : `${tasks.length} ${tasks.length === 1 ? "item" : "items"} left`}
      </div>
    </div>
  );
};

export default TodoList;

