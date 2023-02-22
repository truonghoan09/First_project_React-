import React from "react";

const AddTodo = (props) => {
  const todoItem = props.todoItem;
  const setTodoItem = (value) => {
    props.setTodoItem(value);
  };
  const handleOnClick = () => {
    props.handleOnClick();
  };
  return (
    <div id="InputBlock">
      <label>Add a Todo item: </label>
      <input
        type="text"
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
      ></input>
      <button
        type="button"
        onClick={(event) => {
          console.log(`check data before: `, todoItem);
          handleOnClick();
        }}
      >
        CONFIRM
      </button>
      <br />
      <br />
    </div>
  );
};

export default AddTodo;
