import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: string }> = (props) => {
  return <li className={classes.item}>{props.todo}</li>;
};

export default TodoItem;
