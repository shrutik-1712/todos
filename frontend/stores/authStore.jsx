import { create } from 'zustand'
import axios from 'axios'
const AuthStore = create((set) => ({

    loggedIn:null,
    loginForm:{
        email:"",
        password:"",
    },
    UpdateLoginForm:(e)=>{
        const {name, value}=e.target;
        set(state=>{
            return{
               loginForm:{
                ...state.loginForm,
                [name]:value,
             },
        };
    })
},
SignupForm:{
    email:"",
    password:"",
},
UpdateSignupForm:(e)=>{
    const {name, value}=e.target;
    set(state=>{
        return{
           SignupForm:{
            ...state.SignupForm,
            [name]:value,
         },
    };
})
},
    signup:async(e)=>{
        const {SignupForm}=AuthStore.getState();
        const res=await axios.post("/signup", SignupForm,{withCredentials:true});
        
        set({
            SignupForm:{
                email:"",
                password:"",
            } 
        })
        console.log(res);
    },


    login:async(e)=>{
       
        const {loginForm}=AuthStore.getState();
        const res=await axios.post("/login", loginForm,{withCredentials:true});
        set({loggedIn:true});
        set({
            loginForm:{
                email:"",
                password:"",
            } 
        })
        console.log(res);
    },

    checkAuth:async()=>{
        try {
            await axios.get('/checkauth',{withCredentials:true});
            set({loggedIn:true})
            
        } catch (error) {
            set({loggedIn:false})
            
        }
        
    },

    logout:async(e)=>{
        await axios.get('/logout',{withCredentials:true});
        set({loggedIn:false});
    }
}))


export default AuthStore;