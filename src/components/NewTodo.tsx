import React, { useRef, useContext } from "react";
import TodosContext from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length > 0) {
      todosContext.addTodo(enteredText);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
