import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postRecipies } from "./apiutils"

export const CreateRecipe=()=>{
    const [inputdata,setInputData]=useState({
        title:"",
        author:"",
        image:"",
        ingredients:"",
        receipedirection:""
    })
    const navigate=useNavigate()
    const PostRecipe=()=>{
        postRecipies().then(res=>alert(res))
        navigate('/')
    }
    const HandlepostInput = (e) => {
        setInputData({ ...inputdata, [e.target.name]: e.target.value })
       // validationUserInputs(e)
    }
    console.log(inputdata)
    return (
        <>
            <div>
                <div>Create a recipe</div>
                <div>Share a recipe with the club by completing the form below</div>
                <div className="Form">
                    <div className="">
                        <label>Recipe title</label>
                        <input type={'text'} name="title" onChange={(e)=>HandlepostInput(e)}/>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type={'text'}  name="author" onChange={(e)=>HandlepostInput(e)}/>
                    </div>
                    <div>
                        <label>please give image url or link</label>
                        <input type={'url'}  name="image" onChange={(e)=>HandlepostInput(e)}/>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <input type={'text'}  name="ingredients" onChange={(e)=>HandlepostInput(e)}/>
                    </div>
                    <div>
                        <label>Recipe directions</label>
                        <input type={'text'} name="receipedirection"  onChange={(e)=>HandlepostInput(e)}/>
                    </div>
                    <div>
                        <button onClick={()=>PostRecipe()}>Post Recipe</button>
                    </div>
                </div>
            </div>
        </>
    )
}