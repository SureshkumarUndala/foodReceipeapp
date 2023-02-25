import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postRecipies } from "./apiutils"

export const CreateRecipe = () => {
    const [inputdata, setInputData] = useState({
        title: "",
        author: "",
        image: "",
        ingredients: "",
        receipedirections: ""
    })//title, author, image, ingredients, receipedirections
    const navigate = useNavigate()
    const PostRecipe = () => {
        if (inputdata.title !== "" && inputdata.author !== "" && inputdata.image !== "" && inputdata.ingredients !== "" && inputdata.receipedirections !== "") {
            postRecipies(inputdata).then(res => console.log(res))
            navigate('/home')
        }
        else {
            alert("please give all the details")
        }

    }
    const HandlepostInput = (e) => {
        setInputData({ ...inputdata, [e.target.name]: e.target.value })
        // validationUserInputs(e)
    }
    console.log(inputdata)
    return (
        <div className="create-container">
            <div className="container">
                <div style={{ fontSize: "35px", marginTop: "20px" }}>Create a recipe</div>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>Share a recipe with the club by completing the form below</div>
                <div className="Form">
                    <div className="cols">
                        <label>Recipe title</label>
                        <input type={'text'} name="title" onChange={(e) => HandlepostInput(e)} />
                    </div>
                    <div className="cols">
                        <label>Author</label>
                        <input type={'text'} name="author" onChange={(e) => HandlepostInput(e)} />
                    </div>
                    <div className="cols">
                        <label>please give image url or link</label>
                        <input type={'url'} name="image" onChange={(e) => HandlepostInput(e)} />
                    </div>
                    <div className="cols">
                        <label>Ingredients</label>
                        <input type={'text'} name="ingredients" onChange={(e) => HandlepostInput(e)} />
                    </div>
                    <div className="cols">
                        <label>Recipe directions</label>
                        <input type={'text'} name="receipedirections" onChange={(e) => HandlepostInput(e)} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button onClick={() => PostRecipe()}>Post Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}