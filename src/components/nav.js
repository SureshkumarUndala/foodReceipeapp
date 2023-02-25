
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Recipecontext } from './context'
export const Nav = ({userName}) => {
    const { isauthentiacated, setisauthenticated } = useContext(Recipecontext)

    const navigate = useNavigate()
    const createPost = () => {
        navigate('/createPost')
    }
    const logouthandler = (e) => {
        setisauthenticated(false)
        navigate('/')
        localStorage.clear()
    }
    return (
        <>
            <div className='nav-container'>
                <div className='nav-upper-container'>
                    <Link to='/home'><div className='logo'><div>🍽 </div><div className='text-logo'>Recipe App</div></div></Link>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <button style={{ height: "30px", marginTop: "5px" ,backgroundColor:" rgb(16, 66, 159)",color:"white",fontWeight:"bold",padding:"5px"}}  onClick={(e) => logouthandler(e)}>Log Out</button>
                        <div style={{marginLeft:"20px",borderLeft:"2px solid black",padding:"5px"}}>User Name: {userName}</div>
                    </div>

                </div>

                <div className='Serach-container'>
                    <div className='serchinside'>
                        <i className="fa fa-search" aria-hidden="true" style={{ color: "white", marginLeft: "10px", marginRight: "10px" }}></i>
                        <input type={'text'} className="search-input" placeholder='type recipee..' />
                    </div>
                </div>
                <div className='new-button'>
                    <button onClick={() => createPost()}> 🍕new</button>
                </div>


            </div>
        </>
    )
}