import { useState, ChangeEvent } from "react";
import { TodoInterface } from "../todoInterface";
interface Props{
  todoId: number,
  todoArr: TodoInterface[],
  setTodoArr: (todoArr:TodoInterface[])=> void
}
export const EditTodo = ({todoId,todoArr,setTodoArr}:Props) => {
 
 const [updatedTodoInput,setUpdatedTodoInput] = useState("");
 const [updatedTodoNoteInput,setUpdatedTodoNoteInput] = useState("");

 /* Deny Btn */
 const Deny = (value:number)=>{
   const newArr = todoArr.map((eachTodo)=>{
    if(eachTodo.todoId===value){
        return {...eachTodo,editDelShow:!eachTodo.editDelShow}
    }
    return eachTodo
   })

   setTodoArr(newArr)
 }

 const updateTodo = (e: ChangeEvent<HTMLInputElement>)=>{
     if(e.target.name==="updatedTodoInput"){
        setUpdatedTodoInput(e.target.value)
     }else if(e.target.name==="UpdatedNoteInput"){
        setUpdatedTodoNoteInput(e.target.value)
     }
 }

 const updateBtn = (value:number)=>{
     const newArr = todoArr.map((eachTodo)=>{
        if(eachTodo.todoId===value){
            return {...eachTodo,todoName:updatedTodoInput,todoNote:updatedTodoNoteInput};
        }
        return eachTodo
     })
     setTodoArr(newArr)
 }
    return (
    <div className="flex ">
      <div className="flex flex-col">
        <input
          onChange={updateTodo}
          name="updatedTodoInput"
          placeholder="Write a new todo"
          className="border border-black px-3 py-3 focus:outline-blue-500"
        />
        <input
         onChange={updateTodo}
          name="UpdatedNoteInput"
          placeholder="Write a new note"
          className="border border-black px-3 py-3 focus:outline-blue-500"
        />
      </div>
      <div className="flex flex-col">
      <button onClick={()=>updateBtn(todoId)} className="px-5 py-3 bg-blue-500 border border-blue-500">
          ADD
        </button>
        <button onClick={()=>Deny(todoId)} className="px-5 py-3 bg-yellow-500 border border-yellow-500">
          DENY
        </button>
      </div>
    </div>
  );
};
