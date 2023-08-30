import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div className=" flex gap-2 ml-2 mb-2">
          <div key={todo.id}>{todo.text}</div>
          <button onClick={()=> dispatch(removeTodo(todo.id))} className=" bg-red-600 text-white py-1 px-2">-</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
