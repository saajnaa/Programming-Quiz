import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { FaMoon } from 'react-icons/fa'
import { FaEquals } from 'react-icons/fa'
import { FaCross } from 'react-icons/fa'

import '../style/NavBar.css'


function NavBar() {

    const [showLink, setShowLink] = useState("false")


    const handleClick = ()=>{


setShowLink(!showLink)

    }

    return (
        <>

            <div className="nav">

                <Link className='link' to='/'>
                    <div className="logo">
 
                        <div><FaMoon /></div>

                        <div> Coding Test</div>
                    </div>
                </Link>

                <ul className={showLink ? 'activeLink' : ''}>

                    <Link onClick={()=> setShowLink(false) } className='li' to='/html-test'>HTML</Link>
                    <Link onClick={()=> setShowLink(false) } className='li' to='/css-test'>CSS</Link>
                    <Link onClick={()=> setShowLink(false) } className='li' to='javascript-test'>JavaScript</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>React</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>Tailwind Css</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>Node js</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>Express js</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>MongoDb</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>npm</Link>
                    <Link onClick={()=> setShowLink(false) } className='li'>Git And Github</Link>

                </ul>

                <button className='faequals' onClick={handleClick} >

                    { showLink ? <FaEquals/> : <FaCross/>  }
                  

                </button>

            </div>
        </>
    )
}

export default NavBar