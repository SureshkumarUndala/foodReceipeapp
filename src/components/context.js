import React, { createContext ,useState} from "react";
export const Recipecontext=createContext()
export const RecipeContextProvider=({children})=>{
    const [recipeData,setRecipeData]=useState([])
    const [recipeedetail,setRecipeedetail]=useState(null)
    console.log(recipeedetail)
    return <Recipecontext.Provider value={{
        recipeData,setRecipeData,recipeedetail,setRecipeedetail
    }}>
         { children}
    </Recipecontext.Provider>
}
 