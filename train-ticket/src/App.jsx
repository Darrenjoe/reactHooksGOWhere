import React, { useEffect, useState, useMemo, useRef } from "react";
import "./App.css";

function Control() {
  return <div>Control</div>;
}

function Todos() {
  return <div>todos</div>;
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-list">
      <Control />
      <Todos />
    </div>
  );
}

export default TodoList;
