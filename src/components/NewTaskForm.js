import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(" ");
  const [category, setCategory] = useState("Code");
  function handleTaskTextChange(event) {
    setText(event.target.value);
  }
  function handleTaskCategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTaskTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleTaskCategoryChange}>
          {categories.map((categoryItem) => {
            return <option key={categoryItem}>{categoryItem}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
