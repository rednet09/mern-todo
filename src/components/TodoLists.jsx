import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1 className="py-4 font-semibold">To do APP</h1>
      <TodoForm />
      {todos.length === 0 ? (
        <div className="py-4 font-semibold">Please! Add Your Tasks To do</div>
      ) : (
        todos.map(() => (
          <>
            <div>{todos}</div>
          </>
        ))
      )}
    </>
  );
};

export default TodoLists;
