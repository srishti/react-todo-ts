import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

const TodosContext = React.createContext<TodoContext>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(Date.now(), todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const todosContextData: TodoContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={todosContextData}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
