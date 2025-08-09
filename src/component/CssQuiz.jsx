import React from 'react'
import { useState } from 'react';

import CssQuizData from '../data/CssQuizData'


function Cssquiz() {


  const [value, setvalue] = useState(0);


  const handlePrev = () => {

    setvalue(value - 1);


  }


  const handNext = () => {

    setvalue(value + 1);


  }
  console.log(CssQuizData.lenght)

  return (
    <>



      <div className='quiz-section'>

        <p>{CssQuizData[value].question}</p>
        {CssQuizData[value].options.map((data) => (

          <button className='option' key={data}>{data}</button>


        ))}

        <div className="button">
          <button disabled={value < 1} className='navigate' onClick={handlePrev}>Previous</button>

          <button disabled={value >= 49} className='navigate' onClick={handNext}>Next</button></div>

      </div>








    </>
  )
}

export default Cssquiz;