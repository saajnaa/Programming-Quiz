
import React from 'react'
import { useState } from 'react';

 import HtmlData from '../data/HtmlData';


function HtmlQuiz() {


  const [value, setvalue] = useState(0);


  const handlePrev = () => {

    setvalue(value - 1);


  }


  const handNext = () => {

    setvalue(value + 1);


  }
 

  return (
    <>



      <div className='quiz-section'>

        <p>{HtmlData[value].question}</p>
        {HtmlData[value].options.map((data) => (

          <button className='option' key={data}>{data}</button>


        ))}

        <div className="button">
          <button disabled={value < 1} className='navigate' onClick={handlePrev}>Previous</button>

          <button disabled={value >= 49} className='navigate' onClick={handNext}>Next</button></div>

      </div>








    </>
  )
}

export default HtmlQuiz;