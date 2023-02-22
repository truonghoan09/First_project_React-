import React from "react";

const DisplayTodo = (props) => {
  const callDeleteFromDad = (id) => {
    props.handleDeleteTodo(id);
  };
  const todoList = props.todoList;
  const todoItem = props.todoItem;
  return (
    <div id="DisplayBlock">
      <div className="textAdd">What will you do? {todoItem}?</div>
      <br />
      <br />
      <div className="textAdd">List Todo:</div>
      {todoList.map((item, index) => {
        return (
          <div
            itemID={item.id}
            className="choosediv"
            key={item.id}
            onClick={() => callDeleteFromDad(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
