import React, { ChangeEvent } from "react";
import { TodoInterface } from "../todoInterface";

interface Props {
  todo: string;
  setTodo: (todo: string) => void;
  todoNote: string;
  setTodoNote: (todoNote: string) => void;
  todoArr: TodoInterface[];
  setTodoArr: (arr: TodoInterface[]) => void;
  todoId: number;
  setTodoId:(todoId:number)=> void;
  threeDotsShow: boolean;
  editDelShow: boolean;
  deleteShow: boolean
}

export const Main = ({ todo, setTodo, todoNote, setTodoNote, todoArr, setTodoArr,todoId,setTodoId, threeDotsShow, editDelShow, deleteShow}: Props) => {

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "todoInput") {
      setTodo(e.target.value);
    } else if (e.target.name === "noteInput") {
      setTodoNote(e.target.value);
    }
  };

  const AddTodo = () => {
    setTodoId(todoId+1);
    const newTodo = { todoName: todo, todoNote: todoNote, todoId: todoId, threeDotsShow: threeDotsShow , editDelShow: editDelShow, deleteShow: deleteShow};
    setTodoArr([...todoArr, newTodo]);
    console.log([...todoArr, newTodo]);
    console.log(todoId)
    setTodo("");
    setTodoNote("");
  };

  return (
  <div className="container mx-auto py-5 grid grid-cols-2">
    {/* Add Form */}
    <div className=" text-center">
      <h1>Your Todo List</h1>
      <div className="flex flex-col mt-3 w-1/2 space-y-2 text-center mx-auto">
        <input
          onChange={handleChangeTodo}
          name="todoInput"
          value={todo}
          placeholder="Add your todo here"
          className="border border-black px-3 py-3 focus:outline-blue-500"
        />
        <input
          onChange={handleChangeTodo}
          name="noteInput"
          value={todoNote}
          placeholder="Write a note"
          className="border border-black px-3 py-3 focus:outline-blue-500"
        />
        <p className="text-green-600 w-full text-sm">
          You must add a note for your todo list.
        </p>
        <button onClick={AddTodo} className="px-5 py-3 bg-blue-500 border border-blue-500">
          ADD
        </button>
      </div>
    </div>
    {/* Show Todo */}
    <div className="bg-gray-300 mt-6">
        <div className="p-5">
           {todoArr.map((eachTodo:TodoInterface,value)=>{
            return (
                <div key={value} className="bg-white px-10 py-2 mb-5 relative">
                 
                  <p className="text-xl font-semibold"> <span className="mr-2">📜</span>{eachTodo.todoName}</p>
                  <p className="text-sm text-green-700 font-semibold ml-9 mt-2">{eachTodo.todoNote}</p>
            
                </div>
            )
           })}
        </div>
    </div>
  </div>
  );
};
