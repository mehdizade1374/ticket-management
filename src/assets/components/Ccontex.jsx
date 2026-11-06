import { createContext, useState } from "react";

export const usercontex=createContext();

function Ccontex({children}){

    const[user,setuser]=useState(null);

    return(
    <usercontex.Provider value={{user , setuser}}>

    {children}

    </usercontex.Provider>
    )
}

export default Ccontex;