import { useEffect } from "react";
import AuthStore from "../../stores/authStore"
import Home from "./Home";

export default function RequiedAuth(props) {

  
  const store=AuthStore();
  
  useEffect(()=>{
    if(store.loggedIn===null){
      store.checkAuth();
    }
  },[])
    if(store.loggedIn===null){
      return(<Home/>)
    }

    if(store.loggedIn===false){return<div><Home/></div>}
    return <div>{props.children}</div>
    
}
