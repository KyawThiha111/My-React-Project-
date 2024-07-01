import { TodoInterface } from "../todoInterface";
interface Props{
    todoId: number,
    todoArr: TodoInterface[],
    setTodoArr: (todoArr: TodoInterface[])=> void
}
export const Delete = ({todoId,todoArr,setTodoArr}:Props) => {

    /* No Btn */
    const NoBtn = (value:number)=>{
         const newArr = todoArr.map((eachTodo)=>{
            if(eachTodo.todoId===value){
                return {...eachTodo,deleteShow: !eachTodo.deleteShow}
            }
            return eachTodo
         })
         setTodoArr(newArr);
    }
    /* Yes Btn */
    const YesBtn = (value:number)=>{
        const newArr = todoArr.filter((eachTodo)=>{
            if(eachTodo.todoId===value){
                return false
            }
            return true
        })

        setTodoArr(newArr)
    }
  return (
    <div className="flex flex-col space-y-3 justify-center items-center rounded-lg bg-gray-400  py-5 px-2">
      <p>Do you want to delete your data?</p>
      <div className="flex gap-3">
        <button onClick={()=>YesBtn(todoId)} className="px-8 py-3 bg-blue-500 border border-blue-500">
          Yes
        </button>
        <button onClick={()=>NoBtn(todoId)} className="px-8 py-3 bg-blue-500 border border-blue-500">
          No
        </button>
      </div>
    </div>
  );
};
