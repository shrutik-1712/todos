import TodoStore from "../../stores/TodoStore"


export default function Todo({todo}){
    const store=TodoStore(store=>{
        return{
            deleteTodo:store.deleteTodo, update:store.update,
        };
    })
    return(
        <div key={todo._id} >
            <input type="checkbox"/>
                <span className="decoration-solid decoration-4 text-pretty">{todo.title}<br/>{todo.body}</span><br/>
                <button className="text-white bg-blue-700 hover:bg-blue-800 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center " onClick={()=>{store.deleteTodo(todo._id)}}>delete</button><br/>
                <button className="text-white bg-blue-700 hover:bg-blue-800 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center " onClick={()=>{store.update(todo)}}>update</button>
            </div>
    )
}