import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input

          className=" bg-blue-500 text-black ml-2"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit" className=" bg-black text-white py-1 px-2 m-2">
          Add todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
