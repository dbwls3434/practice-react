import { useState, useEffect } from "react";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const callTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    callTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const onSubmitTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const onDeleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onUpdateTask = async (id) => {
    const targetTask = await fetchTask(id);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...targetTask, reminder: !targetTask.reminder }),
    });
    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  return (
    <div className="container">
      <Header />
      <AddTask onSubmitTask={onSubmitTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
      />
    </div>
  );
}

export default App;
