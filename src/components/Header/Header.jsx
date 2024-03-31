import React from 'react'
import "./header.css"
import { useNavigate, useLocation, useOutlet, Outlet } from 'react-router'
import Landing from '../Landing/Landing'

const Header = () => {

    // let loc = useLocation()
    // let out = useOutlet()
    let nav = useNavigate()

        console.log("input", input)
        nav(input)
 const navMe = (input) => {
   
    }
    return (
        <>
            <h1> JCT Resouces Page</h1>

            {/* {console.log("loc", loc.pathname)} */}

            <section id="nav">

                <div
                    id="W1"
                    onClick={(e) => navMe(e.target.id)}>
                    W1
                </div>

                <div>
                    W2
                </div>

                <div>
                    W3
                </div>

                <div>
                    W4
                </div>





            </section>



            {/* {loc.pathname == "/" ? (<Landing />) : (<Outlet />)} */}


        </>
    )
}


export default Header