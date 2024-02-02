import { create } from 'zustand'
import axios from 'axios'
const TodoStore = create((set) => ({
    todo:null,

    createForm:{
        title:"",
        body:"",
    },

    updateForm: {
        _id: null,
        title: "",
        body: "",
      },


    fetchTodos:async()=>{
        const res= await axios.get("http://localhost:3000/posts")

        set({todo:res.data.todo});
      },

    updateCreateForm:(e)=>{
        const { name, value } = e.target;
        set((state) => {
            return {
              createForm: {
                ...state.createForm,
                [name]: value,
              },
            };
          });
        },
    
        createTodo:async(e)=>{
            e.preventDefault();
            const { createForm, todo } = TodoStore.getState();

            const res= await axios.post("http://localhost:3000/posts",createForm);
            console.log(res)

            set({
                todo:[...todo, res.data.todo],
                createForm: {
                    title: "",
                    body: "",
                  },

            });
        
          },
          deleteTodo:async(_id)=>{

            const res= await axios.delete(`http://localhost:3000/posts/${_id}`);
            const {todo}=TodoStore.getState();

        
            const newTodo=todo.filter(todo=>{
              return todo._id !==_id;
            });
            set({todo:newTodo})
          },
          handleUpdateFieldChange: (e) => {
            const { value, name } = e.target;
        
            set((state) => {
              return {
                updateForm: {
                  ...state.updateForm,
                  [name]: value,
                },
              };
            });
          },
          update:({_id, title, body})=>{
            set({
                updateForm: {
                  title,
                  body,
                  _id,
                },
              });
            },

            UpdateTodo:async(e)=>{
                e.preventDefault();

                const{updateForm:{
                    title,body,_id},todo
                }=TodoStore.getState();
               
                const res=await axios.put(`http://localhost:3000/posts/${_id}`,{title,body});
                console.log(res);
                const newtodo = [...todo];
                const todoIndex = todo.findIndex((todo) => {
                  return todo._id === _id;
                });
                newtodo[todoIndex] = res.data.todo;
            

                set({
                    todo:newtodo,
                    updateForm:{
                        _id: null,
                  title: "",
                  body: "",

                    }
                });
              },
}))

export default TodoStore;