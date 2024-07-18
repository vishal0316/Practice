import { useState } from "react";

function App() {
  const [todo, setTodos] = useState([
    { name: "apple", checked: false },
    { name: "banana", checked: false },
    { name: "grape", checked: false },
    { name: "orange", checked: false },
  ]);

  const checkHandleClick = (index) => {
    todo[index].checked = !todo[index].checked;
    setTodos([...todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        {todo.map((todos, index) => {
          return (
            <div className="flex" key={index}>
              <input
                type="checkbox"
                checked={todos.checked}
                onClick={() => checkHandleClick(index)}
              />
              <h1>
                {todos.name}
                {""}
                {todos.checked ? (
                  <span onClick={() => deleteTodo(index)}>&#x2715;</span>
                ) : (
                  ""
                )}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
