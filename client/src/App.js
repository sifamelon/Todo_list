import Todo from "./components/Todo";

function App() {
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_KEY}`);
  // }, []);
  return (
    <>
      {/* <h1>hellow sifen</h1>
      <h4>My Task</h4>
      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">get the bread</div>
          <div className="delete-todo"></div>
        </div>
        <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">get the milk</div>
          <div className="delete-todo"></div>
        </div>
      </div> */}
      <Todo />
    </>
  );
}

export default App;
