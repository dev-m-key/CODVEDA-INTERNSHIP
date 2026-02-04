import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import TaskCard from "./components/TaskCard";
import Modal from "./components/Modal";
import { getTasks, createTask, updateTask, deleteTaskAPI } from "./Api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  // Add new task
  const addTask = async () => {
    if (input.trim() === "") return;
    try {
      const res = await createTask({ title: input, completed: false });
      setTasks([...tasks, res.data]);
      setInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // Delete task
  const deleteTask = async (taskId) => {
    try {
      await deleteTaskAPI(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error(err);
    }
  };

  // Open edit modal
  const editTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  // Save edited task
  const saveTask = async () => {
    try {
      await updateTask(taskToEdit.id, { title: taskToEdit.title, completed: taskToEdit.completed });
      setTasks(tasks.map((t) => (t.id === taskToEdit.id ? taskToEdit : t)));
      setTaskToEdit(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      {/* Input + Add Button */}
      <div className="flex gap-2 w-full max-w-md mb-6">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => deleteTask(task.id)}
              onEdit={() => editTask(task)}
            />
          ))
        )}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Task"
        onConfirm={saveTask}
      >
        <Input
          value={taskToEdit?.title || ""}
          onChange={(e) => setTaskToEdit({ ...taskToEdit, title: e.target.value })}
        />
      </Modal>
    </div>
  );
};

export default App;
