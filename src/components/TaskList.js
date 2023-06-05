import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";
function TaskList({ tasks, setTasks }) {
  function onClickDelete(text) {
    const newTaskArr = tasks.filter((task) => task.text !== text);
    setTasks(newTaskArr);
  }
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={uuid()} text={task.text} category={task.category} onClickDelete={onClickDelete} />
      ))}
    </div>
  );
}

export default TaskList;
