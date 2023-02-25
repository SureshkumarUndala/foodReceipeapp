import { useContext, useState } from "react"
import { Recipecontext } from "./context"
import { Nav } from "./nav"

const url = "http://localhost:5001"
export const Details = () => {
    const { recipeData, setRecipeData, recipeedetail, setRecipeedetail } = useContext(Recipecontext)
    const [toggleInstrunction, settoggleInstrunction] = useState(false)
    const Instructions = () => {
        return (
            <div style={{width:"200px",marginLeft:"10px"}}>
                {recipeedetail.receipedirections}
            </div>
        )
    }
    const Ingridients = () => {
        return (

            <div  style={{width:"200px",marginLeft:"10px"}}>
                    {recipeedetail.ingredients}
                {/* {(recipeedetail.ingredients).map((data, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    )
                })} */}
            </div>
        )
    }
    return (
        <>
        <Nav/>
            <div className="details-container">
                {recipeedetail ?
                    <div className="details">
                        <div style={{width:"50%"}}>
                            <img src={recipeedetail.image} />
                        </div>
                        <div>
                            <div className="insta-btn">
                                <button onClick={()=>settoggleInstrunction(true)}>Instructions</button>
                                <button onClick={()=>settoggleInstrunction(false)}>Ingridients</button>
                            </div>
                            {
                                toggleInstrunction ? <Instructions /> : <Ingridients />
                            }
                        </div>
                    </div>
                    : "no details"}
            </div>
        </>
    )
}