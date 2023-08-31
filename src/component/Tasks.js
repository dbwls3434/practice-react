import Task from "./Task";

function Tasks({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </>
  );
}

export default Tasks;
