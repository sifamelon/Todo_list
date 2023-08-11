import React from "react";
import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [popupActive, setpopupActive] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/todos`)
      .then((res) => res.json())
      .then((data) => settodos(data))
      .catch((err) => console.error("error:", err));
  }, []);
  const completeTodo = async (id) => {
    const data = await fetch(
      `${process.env.REACT_APP_API_KEY}/complete/${id}`,
      { method: "PUT" }
    ).then((res) => res.json());
    settodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }
        return todo;
      })
    );
  };
  const deleteTodo = async (id) => {
    const data = await fetch(`${process.env.REACT_APP_API_KEY}/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    settodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };
  const addTodo = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_KEY}/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTodo }),
    }).then((res) => res.json());
    settodos([...todos, data]);
    setnewTodo("");
    setpopupActive(false);
  };
  return (
    <div className="App">
      <h1>hellow sifen</h1>
      <h4>My Task </h4>
      <div className="todos">
        {todos.map((todo) => (
          <div
            className={"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id}
            onClick={() => completeTodo(todo._id)}
          >
            <div className="checkbox"></div>
            <div className="text">{todo.text}</div>
            <div
              className="delete-todo"
              onClick={() => deleteTodo(todo._id)}
            ></div>
          </div>
        ))}

        {/* <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">get the milk</div>
          <div className="delete-todo"></div>
        </div> */}
        <div className="addtodos" onClick={() => setpopupActive(true)}>
          +
        </div>
        {popupActive ? (
          <div className="popup">
            <div className="closepopup" onClick={() => setpopupActive(false)}>
              X
            </div>
            <div className="contet">
              <h3>Add Task</h3>

              <input
                type="text"
                className="add-todo-input"
                onChange={(e) => setnewTodo(e.target.value)}
                value={newTodo}
              />
              <button className="button" onClick={addTodo}>
                addTodo
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Todo;
