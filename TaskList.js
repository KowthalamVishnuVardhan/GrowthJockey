import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Identify and contextualize the problem" },
    { id: 2, text: "Present ideas and changes to team" },
    { id: 3, text: "Prepare User Flows" },
    { id: 4, text: "Prepare design style guide" },
    { id: 5, text: "Delivery stage: test and release" },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === taskId);
      const task = prevTasks[taskIndex];
      task.completed = !task.completed;
      return [...prevTasks];
    });
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskCompletion={handleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
