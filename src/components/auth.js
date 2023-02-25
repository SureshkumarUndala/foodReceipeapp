import React, { useContext, useEffect } from "react"
import { Recipecontext } from "./context"
import { Home } from "./home"
import { useNavigate } from "react-router-dom"
import { RegLogcontext } from "./context";
export const HomeAuthentication = () => {
    const { isauthentiacated, setisauthenticated } = useContext(Recipecontext)
    console.log(isauthentiacated)
    const navigate = useNavigate()

    const notokenfunction = (isauthentiacated) => {
        if (!localStorage.getItem('token')) {
            navigate('/')
            console.log(localStorage.getItem('token'))
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setisauthenticated(true)
            console.log(localStorage.getItem('token'))
        }
        notokenfunction(isauthentiacated)
    }, [])
    return (
        <>
            {isauthentiacated ? <Home /> : notokenfunction(isauthentiacated)}

        </>
    )
}