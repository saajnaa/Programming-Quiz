import React from 'react'
 import { useState } from 'react'

import quizQuestions  from '../data/JsQuizData'
import '../style/JsQuiz.css'
 
 

function JsQuiz() {

const [value , setvalue] = useState(0);


const handlePrev = ()=>{

setvalue(value - 1);


}


const handNext = ()=>{



setvalue(value+1);



}


  return (
     <>
     
     
     {/* quiz app logic */}
     
     <div className='quiz-section'>
 
<p>{quizQuestions[value].question}</p>
 {quizQuestions[value].options.map((data)=>(

<button className='option' key={data}>{data}</button>


 ))}

<div className="button">
  <button disabled={value<1} className='navigate' onClick={handlePrev}>Previous</button>

<button disabled={value>32}  className='navigate' onClick={handNext}>Next</button></div>

     </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     </>
  )
}

export default JsQuiz