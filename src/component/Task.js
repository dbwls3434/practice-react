import React from "react";

function Task({ task, onDeleteTask, onUpdateTask }) {
  return (
    <div onDoubleClick={() => onUpdateTask(task.id)}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>{task.reminder ? "reminder" : "no"}</p>
      <button onClick={() => onDeleteTask(task.id)}>delete</button>
    </div>
  );
}

export default Task;
