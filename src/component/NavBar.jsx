import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// React Icons......................
import { CgMenuRightAlt } from "react-icons/cg"; 
import { RxCross1 } from "react-icons/rx"; 


import Navlogo from '../Images/logo.png'
import '../style/NavBar.css'


function NavBar() {

    const [showLink, setShowLink] = useState("false")


    const handleClick = () => {


        setShowLink(!showLink)

    }

    return (
        <>

            <div className="nav">

                <Link className='link' to='/'>
                    <div className="logo">

                        <img src={Navlogo} alt="Navigation Logo" />

                        <div> Coding Test</div>
                    </div>
                </Link>

                <ul className={showLink ? '' : 'activeLink'}>

                    <Link onClick={() => setShowLink(true)} className='li' to='/html-test'>HTML</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/css-test'>CSS</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='javascript-test'>JavaScript</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/ReactJS' >React</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/TailwindCss'>Tailwind Css</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/NodeJs'>Node js</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/ExpressJs'>Express js</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/MongoDb'>MongoDb</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/npm'>npm</Link>
                    <Link onClick={() => setShowLink(true)} className='li' to='/GitAndGithub'>Git And Github</Link>

                </ul>

                <button className='faequals' onClick={handleClick} >

                    {showLink ? <CgMenuRightAlt /> : <RxCross1 />}


                </button>

            </div>
        </>
    )
}

export default NavBar