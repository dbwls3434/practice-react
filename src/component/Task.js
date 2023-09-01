import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  getTaskList,
  updateTask,
} from "../features/task/taskSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  const { task: inTask } = useSelector((state) => state.task);

  const onClick = (id) => {
    dispatch(deleteTask(id));
  };

  const onDoubleClick = (id) => {
    dispatch(updateTask(id));
  };

  useEffect(() => {
    dispatch(getTaskList());
  }, [inTask]);

  return (
    <div onDoubleClick={onDoubleClick.bind(this, task.id)}>
      <h3>{task.id}</h3>
      <p>{task.text}</p>
      <p>{task.day}</p>
      <p>{task.reminder ? "true" : "false"}</p>
      <button onClick={onClick.bind(this, task.id)}>delete</button>
    </div>
  );
}

export default Task;
