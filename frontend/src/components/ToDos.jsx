import TodoStore from "../../stores/TodoStore";
import Todo from "./Todo";

export default function todos() {
    const stores = TodoStore();
    return(
        <>
        <div>
        <div className="grid gap-6 mb-6 ml-6 md:grid-cols-2">
        <h2 className="block mt-3 text-sm font-medium text-gray-900">TODOS:</h2>
        </div>
        <div className="decoration-solid">
        {stores.todo && stores.todo.map(todo=>{
          return(
            <Todo todo ={todo} key={todo._id}/>
          )
        })}
        </div>
      </div>
        </>
    )
}