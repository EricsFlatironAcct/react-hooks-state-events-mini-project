import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [category, setCategory] = useState("All");
  const displayedTasks = tasks.filter((task) => category === "All" || task.category === category);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES.filter((option) => option !== "All")} />
      <TaskList tasks={displayedTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
