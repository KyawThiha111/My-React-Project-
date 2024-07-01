import { TodoInterface } from "../todoInterface";
import { useState } from "react";
import { EditTodo } from "../Components/editTodo";
import { Delete } from "../Components/delete";
interface Props{
    todo:string,
    setTodo:(todo:string)=>void,
    todoNote :string,
    setTodoNote: (todoNote:string)=>void,
    todoArr: TodoInterface[],
    setTodoArr: (value:TodoInterface[])=>void,
    todoId : number,
    setTodoId: (todoId:number)=> void,
    threeDotsShow: boolean,
    setThreeDotsShow: (threeDotsShow: boolean)=>void,
    editDelShow: boolean,
    setEditDelShow: (editDelShow: boolean)=> void,
    deleteShow: boolean,
    setDeleteShow:(deleteShow: boolean)=> void
}
export const TodoPage = ({todo,setTodo,todoNote,setTodoNote,todoArr,setTodoArr,todoId,setTodoId,threeDotsShow,setThreeDotsShow, editDelShow,setEditDelShow, deleteShow:deleteShow, setDeleteShow: setDeleteShow}: Props)=>{
   
    const [updateTodoClick,setUpdateTodoClick] = useState(false);
    /* ThreeDots Fun */
    const setThreeDotsFun = (value:number)=>{
      const newArr = todoArr.map((eachTodo)=>{
        if(eachTodo.todoId===value){
           return {...eachTodo,threeDotsShow: !eachTodo.threeDotsShow}
        }
        return eachTodo
      })
      setTodoArr(newArr)
      console.log(value, todoArr)
    }

    /* Edit Fun */
   const EditFun = (value:number)=>{
      const newArray = todoArr.map((eachTodo)=>{
         if(eachTodo.todoId===value){
            return {...eachTodo, editDelShow: !eachTodo.editDelShow}
         }
         return eachTodo
      })

      setTodoArr(newArray)
   }

   /* Delete Fun */
   const DeleteFun = (value:number)=>{
     const newArr = todoArr.map((eachTodo)=>{
        if(eachTodo.todoId===value){
            return {...eachTodo,deleteShow: !eachTodo.deleteShow}
        }
        return eachTodo
     })
     setTodoArr(newArr)
   }
    return(
        <div className="container mx-auto py-3 w-2/3 mt-5 text-center bg-blue-300">
            <h1 className="text-2xl font-bold mb-5">Your Todo List</h1>
            <div>
                {todoArr.map((eachTodo:TodoInterface,value)=>{
                   return (
                    <div key={value} className="bg-white relative w-2/3 mx-auto text-start mb-3 px-5 py-5">
                        {/* Three Dots for editing and deleting */}
                        {eachTodo.threeDotsShow&&(
                            <div className="absolute top-5 right-1 border px-5 py-2 rounded-xl shadow-blue-900 shadow-2xl">
                            <p onClick={()=>EditFun(eachTodo.todoId)} className="mb-2">Edit?</p>
                            <p onClick={()=>DeleteFun(eachTodo.todoId)}>Delete?</p>
                        </div>
                        )}
                        {/* Edit Part */}
                         {eachTodo.editDelShow&& (
                            <div className="w-1/2 absolute top-8 right-0">
                                <EditTodo todoId={eachTodo.todoId} todoArr={todoArr} setTodoArr={setTodoArr}/>
                            </div>
                         )}
                        
                        {/* Delete Part*/}
                        {
                          eachTodo.deleteShow&&(
                            <div className="absolute top-2 right-20">
                                <Delete todoId={eachTodo.todoId} todoArr={todoArr} setTodoArr={setTodoArr}/>
                            </div>
                          )
                        }


                        <p onClick={()=>setThreeDotsFun(eachTodo.todoId)} className="text-4xl absolute -top-4 right-1">...</p>
                        <p>MY TODO:</p>
                        <p className="text-xl font-semibold">{eachTodo.todoName}</p>
                        <p className="text-green-800 font-semibold">{eachTodo.todoNote}</p>
                    </div>
                   )
                })}
            </div>
        </div>
    )
}