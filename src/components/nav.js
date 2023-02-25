
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Nav = () => {
    const navigate=useNavigate()
    const createPost=()=>{
        navigate('/createPost')
    }
    return (
        <>
            <div className='nav-container'>
                <div className='logo'><div>🍽 </div><div className='text-logo'>Recipe App</div></div>
                <div className='Serach-container'>
                    <div className='serchinside'>
                        <i className="fa fa-search" aria-hidden="true" style={{color:"white",marginLeft:"10px",marginRight:"10px"}}></i>
                        <input type={'text'} className="search-input" placeholder='type recipee..'/>
                    </div>
                </div>
                <div className='new-button'>
                    <button onClick={()=>createPost()}> 🍕new</button>               
                </div>


            </div>
        </>
    )
}