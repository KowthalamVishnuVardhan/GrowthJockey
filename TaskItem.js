import React, { useState } from "react";

const TaskItem = ({ task, onTaskCompletion }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [count, setCount] = useState(task.completed ? 1 : 0); // Initialize count based on initial completed state

  const handleToggleCompletion = () => {
    setCompleted((prevCompleted) => !prevCompleted);
    onTaskCompletion(task.id, !completed);

    if (completed) {
      setCount(count - 1); // Decrease count on uncheck
    } else {
      setCount(count + 1); // Increase count on check
    }
  };

  const totalTasks = 5; // Assuming there are 5 tasks in total

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleCompletion}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <span
        className="task-count"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        {count} / {totalTasks} done
      </span>
    </li>
  );
};

export default TaskItem;
