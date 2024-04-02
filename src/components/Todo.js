import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import AddIcon from "@mui/icons-material/Add";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="main-container">
      <div className="todo-section">
        <div className="add-task">
          <input
            id="addTodoInput"
            className="input-task"
            type="text"
            placeholder="Add your tasks..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <i className="add-icon">
            <AddIcon onClick={handleAddTodoClick} fontSize="large" />
          </i>
        </div>

        <div className="filter-search">
          <FilterButtons />
          <div className="search">
            <input
              className="search-text"
              type="text"
              placeholder="Search Tasks"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
