import React from 'react'
import { Link } from 'react-router-dom'


import '../style/Home.css'

import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'



function Home() {
  return (


    <>


      <div className="container">

        <p>Let's Test Your Coding Skills🔥</p>
        <div className="box-container">

          <Link className='link' to='/html-test'>
            <div className="box">
              <div className="icon"><FaHtml5 /> </div>
              <span>HTML</span>

            </div>
          </Link>

          <Link className='link' to='/css-test'>
            <div className="box">
              <div className="icon"><FaCss3 /> </div>
              <span>Css</span>


            </div>
          </Link>


          <Link className='link' to='/javascript-test'>
            <div className="box">
              <div className="icon"><FaJs /> </div>
              <span>JavaScript</span>


            </div>

          </Link>


          <Link className='link' to='/reacjs-test'>
            <div className="box">
              <div className="icon"><FaReact /> </div>
              <span>React.js</span>


            </div>
          </Link>
        </div>

      </div>


    </>
  )
}

export default Home