import React, { useState } from 'react'
import Header from "../Header/Header"
import { useNavigate, useLocation, useOutlet, Outlet } from 'react-router'
import Card from "../Card/Card"

import dataJson from "../../data.json"

const Landing = () => {

    const [data, setData] = useState([...dataJson])

//     let sortedTitle = [...data].sort((a, b) => a.title - b.title)

// console.log("should sort title", [...data].sort((a, b) => a.title - b.title))

    const navMe = (input) => {
        console.log("input", input)
        nav(input)
    }

    let nav = useNavigate()


    return (
        <>
            {/* {console.log("dataJson", dataJson)} */}
            {/* {console.log("data", data)}
            {console.log("sort YEAR", [...data].sort((a, b) => a.year - b.year))}
            {console.log("sortedTitlesortedTitle", sortedTitle)} */}
            <h1> Coding Resouces from across the web</h1>

            {/* {console.log("loc", loc.pathname)} */}

            <section id="nav">

                <div  id="html" onClick={(e) => nav(e.target.id)}>[HTML]</div>


                <div id="css" onClick={(e) => nav(e.target.id)}>[CSS]</div>


                <div id="js" onClick={(e) => nav(e.target.id)}>[JS]</div>




            </section>

            <br />

            <section>

                {/* {data.sort((a, b)=> a.title.toLowerCase() - b.title.toLowerCase()).map((item, i) => { */}
                {/* {sortedTitle.map((item, i) => {
                    return (

                        <Card item={item} />
             
                    )
                })} */}


            </section>




        </>
    )
}

export default Landing