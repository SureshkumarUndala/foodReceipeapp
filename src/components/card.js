import React, { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Recipecontext } from "./context"
export const Card = ({ recipe }) => {
    const navigate = useNavigate()
    const { recipeData, setRecipeData ,recipeedetail,setRecipeedetail} = useContext(Recipecontext)
    const showRecipe = (e) => {
        setRecipeedetail(e)
        navigate('/details')
    }
  //  console.log(recipeedetail)
    return (
        <>

            <div className="textcont" style={{backgroundImage:`url(${recipe.image})`,height:"100%",backgroundSize: "cover"}} onClick={() => showRecipe(recipe)}>
                <div>{recipe.title}</div>
            </div>
            {/* <div className="" onClick={() => showDetails(blog)} id={blog.id}>
                <div className="rows upper">
                    <div>Title :{blog.title}</div>
                    <div className="date">{blog.created_at}</div>
                </div>

                <img src={blog.Image} width="300px" height="350px" />
                <div className="description">{blog.Description}</div>
                <div  className="rows bottom">
                    <i className="fa fa-paper-plane" aria-hidden="true" id={blog._id}></i>
                    <div className="rows comments">
                        <i className="fa fa-comment" style={{ fontSize: "25px" }}></i>
                        <div className="round">{(blog.comments).length}</div>
                    </div>

                </div>
            </div> */}
        </>
    )
}