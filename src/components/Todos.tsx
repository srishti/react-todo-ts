import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodosContext from "../store/todos-context";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosContext.items.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onRemove={() => todosContext.removeTodo(todo.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
