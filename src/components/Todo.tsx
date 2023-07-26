import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ todo: string }> = (props) => {
  return <li>{props.todo}</li>;
};

export default TodoItem;
