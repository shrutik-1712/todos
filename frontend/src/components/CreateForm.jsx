import TodoStore from "../../stores/TodoStore";

export default function CreateForm() {
    const stores = TodoStore();
    if (stores.updateForm._id) return <></>;
  return (
    <>
    <div className="grid justify-items-start">
      <div>
      <h2 className="block mt-4 mb-4 text-lg font-medium text-gray-900 place-content-center">create todo</h2>
      </div>
      <form onSubmit={stores.createTodo}>
      <div>
      <label className="block mt-2 mb-2 text-base font-medium text-gray-90">title</label>
        <input onChange={stores.updateCreateForm} value={stores.createForm.title} name="title" placeholder='title'
      className="bg-gray-50 border border-gray-300 text-gray-900" required
      />
      </div>
      <div>
      <label className="block mt-2 mb-2 text-base font-medium text-gray-90">description</label>
        <input onChange={stores.updateCreateForm} value={stores.createForm.body} name="body" placeholder='description'
        className="bg-gray-50 border border-gray-300 text-gray-900" required/> 
      
      </div>
      <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 mt-2 mb-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center ">create</button>
    </form>
    </div>
  </>
  )
}
