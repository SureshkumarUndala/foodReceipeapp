import { useContext, useState } from "react"
import { Recipecontext } from "./context"
import { Nav } from "./nav"

const url = "http://localhost:5001"
export const Details = () => {
    const { recipeData, setRecipeData, recipeedetail, setRecipeedetail } = useContext(Recipecontext)
    const [toggleInstrunction, settoggleInstrunction] = useState(false)
    const Instructions = () => {
        return (
            <>
                {recipeedetail.direction}
            </>
        )
    }
    const Ingridients = () => {
        return (

            <>
                {(recipeedetail.ingridiants).map((data, index) => {
                    return (
                        <div key={index}>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <>
        <Nav/>
            <div>
                {recipeedetail ?
                    <>
                        <div>
                            <img src={recipeedetail.image} />
                        </div>
                        <div>
                            <div>
                                <button onClick={()=>settoggleInstrunction(true)}>Instructions</button>
                                <button onClick={()=>settoggleInstrunction(false)}>Ingridients</button>
                            </div>
                            {
                                toggleInstrunction ? <Instructions /> : <Ingridients />
                            }
                        </div>
                    </>
                    : "no details"}
            </div>
        </>
    )
}