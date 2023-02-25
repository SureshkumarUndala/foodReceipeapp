import React, { createContext ,useState} from "react";
export const Recipecontext=createContext()
export const RecipeContextProvider=({children})=>{
    const [recipeData,setRecipeData]=useState([])
    const [recipeedetail,setRecipeedetail]=useState(null)
    const [token,setToken]=useState(null)
    const [isauthentiacated,setisauthenticated]=useState(false)
    console.log(recipeedetail)
    return <Recipecontext.Provider value={{
        recipeData,setRecipeData,recipeedetail,setRecipeedetail,
        token,setToken,isauthentiacated,setisauthenticated
    }}>
         { children}
    </Recipecontext.Provider>
}
 