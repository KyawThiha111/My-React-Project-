import React, { FC, ChangeEvent } from "react";
import { useState } from "react";
import { TodoInterface } from "./todoInterface";
import { Main } from "./Pages/main";
import { TodoPage } from "./Pages/todoPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App: FC = () => {
  const [todo, setTodo] = useState("");
  const [todoNote, setTodoNote] = useState("");
  const [todoArr, setTodoArr] = useState<TodoInterface[]>([]);
  const [todoId, setTodoId] = useState(0);
  const [threeDotsShow, setThreeDotsShow] = useState(false);
  const [editDelShow, setEditDelShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  return (
    <div>
      <Router>
        <nav className="container flex justify-between items-center mx-auto py-3">
          <Link to="/">Main</Link>
          <Link to="/todo">Your Todo</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                todo={todo}
                setTodo={setTodo}
                todoNote={todoNote}
                setTodoNote={setTodoNote}
                todoArr={todoArr}
                setTodoArr={setTodoArr}
                todoId={todoId}
                setTodoId={setTodoId}
                threeDotsShow={threeDotsShow}
                editDelShow={editDelShow}
                deleteShow={deleteShow}
              />
            }
          />
          <Route
            path="/todo"
            element={
              <TodoPage
                todo={todo}
                setTodo={setTodo}
                todoNote={todoNote}
                setTodoNote={setTodoNote}
                todoArr={todoArr}
                setTodoArr={setTodoArr}
                todoId={todoId}
                setTodoId={setTodoId}
                threeDotsShow={threeDotsShow}
                setThreeDotsShow={setThreeDotsShow}
                editDelShow={editDelShow}
                setEditDelShow={setEditDelShow}
                deleteShow={deleteShow}
                setDeleteShow={setDeleteShow}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
