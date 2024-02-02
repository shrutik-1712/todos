import TodoStore from "../../stores/TodoStore"
export default function updateForm() {
    const stores=TodoStore()
  if (!stores.updateForm._id) return <></>;
  return (
    <div className="grid justify-items-start">
      <div><h2 className="block mt-4 mb-4 text-lg font-medium text-gray-900 place-content-center">update todo</h2></div>
      <form onSubmit={stores.UpdateTodo}>

      <div>
      <label className="block mt-2 mb-2 text-base font-medium text-gray-90">title</label>

      <input onChange={stores.handleUpdateFieldChange} value={stores.updateForm.title} name="title" 
      className="bg-gray-50 border border-gray-300 text-gray-900" required
      />
      </div>
    <div>
    <label className="block mt-2 mb-2 text-base font-medium text-gray-90">description</label>
        
      <input onChange={stores.handleUpdateFieldChange} value={stores.updateForm.body} name="body" 
      className="bg-gray-50 border border-gray-300 text-gray-900"/>
    
    </div>
    <div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 mt-2 mb-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center ">update</button>
      </div>  
    </form>
    </div>
  )
}
