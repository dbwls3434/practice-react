import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { getTaskList } from "../features/task/taskSlice";

function Tasks() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
}

export default Tasks;
