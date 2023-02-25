import React, { useContext, useEffect, useState } from 'react'
import { Nav } from './nav'
import './home.css'
import { Card } from './card'
import { Recipecontext } from './context'
import { getrecipies } from './apiutils'
export const Home = () => {
    const { recipeData, setRecipeData } = useContext(Recipecontext)
    const [userName,setUserName]=useState("")
    useEffect(()=>{
        getrecipies().then(res => {
            console.log(res)
           // res = res.reverse()
           setUserName(res.username)
            setRecipeData(res.allposts)
        })
    },[])
    return (
        <>
            <Nav userName={userName}/>
            <h1 style={{ textAlign: "center" }}>All recipies</h1>
            <div className='Card-container'>
                <div className='Card-cont'>
                    
                    {
                        recipeData ? recipeData.map((recipe, index) => {
                            return (
                                <div className='Card' key={index} id={recipe._id}>
                                    <Card recipe={recipe} />
                                </div>
                            )
                        })
                            : <h1>is loading</h1>
                    }
                </div>
            </div>
        </>
    )
}