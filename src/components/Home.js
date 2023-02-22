import React from "react";
import { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Main = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([
    { id: "todo1", name: "Watching Youtube" },
    { id: "todo2", name: "Using Facebook" },
    { id: "todo3", name: "Reading Book" },
  ]);
  //Bắt sự kiện nhấp chuột vào ô submit
  //Nhập dữ liệu từ input và cập nhật cho todoList[]
  //Xóa đi dữ liệu của todoItem và của ô input
  const handleOnClick = () => {
    if (!todoItem) {
      alert(`Vui lòng nhập dữ liệu vào ô "Todo Item"`);
      return;
    } else {
      let idItem = `todo${todoList.length + 1}`;
      setTodoList([...todoList, { id: idItem, name: todoItem }]);
      setTodoItem("");
    }
  };
  //Bắt sự kiện nhấp chuột vào các phần tử của todoList[]
  //Tạo result[] bắt lấy filter của todoList sau khi loại item có id = tham số truyền vào
  //Cập nhật lại State todoList
  const handleDeleteTodo = (itemId) => {
    const result = _.filter(todoList, (item) => item.id !== itemId);
    setTodoList(result);
  };

  return (
    <div className="containerTodoList">
      <AddTodo
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        handleOnClick={handleOnClick}
      />
      <DisplayTodo
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        todoItem={todoItem}
      />
    </div>
  );
};
export default Main;
