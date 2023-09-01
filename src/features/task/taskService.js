const API_URL = "/tasks/";

const getTaskList = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

const getTaskDetail = async (id) => {
  const res = await fetch(`${API_URL}${id}`);
  const data = await res.json();
  return data;
};

const createTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  return data;
};

const updateTask = async (id) => {
  const targetTask = await getTaskDetail(id);
  const res = await fetch(`${API_URL}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...targetTask, reminder: !targetTask.reminder }),
  });
  const data = await res.json();
  return data;
};

const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}${id}`, {
    method: "DELETE",
  });
  return id;
};

const taskService = {
  getTaskList,
  getTaskDetail,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;
