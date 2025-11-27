import React from 'react'
 import { useState } from 'react'

import quizQuestions  from '../data/JsQuizData'
import '../style/JsQuiz.css'
 
 

function JsQuiz() {

const [value , setvalue] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [score, setScore] = useState(0);
const [answeredQuestions, setAnsweredQuestions] = useState({});


const handlePrev = ()=>{

setvalue(value - 1);
setSelectedAnswer(null);

}


const handNext = ()=>{

setvalue(value+1);
setSelectedAnswer(null);

}

const handleAnswerClick = (selectedOption) => {
  const isCorrect = selectedOption === quizQuestions[value].answer;
  
  if (!answeredQuestions[value]) {
    setSelectedAnswer(selectedOption);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions({
      ...answeredQuestions,
      [value]: selectedOption
    });
  }
}

const getButtonClass = (option) => {
  if (!selectedAnswer) return 'option';
  
  const isCorrect = option === quizQuestions[value].answer;
  
  if (option === selectedAnswer) {
    return isCorrect ? 'option correct' : 'option wrong';
  }
  
  if (isCorrect) {
    return 'option correct-answer';
  }
  
  return 'option';
}


  return (
     <>
     
     
     {/* quiz app logic */}
     
     <div className='quiz-section'>
 
<p>{quizQuestions[value].question}</p>
 {quizQuestions[value].options.map((data)=>(

<button 
  className={getButtonClass(data)} 
  key={data}
  onClick={() => handleAnswerClick(data)}
  disabled={selectedAnswer !== null}
>
  {data}
</button>

 ))}

{selectedAnswer && (
  <p className='feedback'>
    {selectedAnswer === quizQuestions[value].answer ? '✓ Correct!' : '✗ Wrong!'}
  </p>
)}

<div className="button">
  <button disabled={value<1} className='navigate' onClick={handlePrev}>Previous</button>

<button disabled={value >= quizQuestions.length - 1}  className='navigate' onClick={handNext}>Next</button></div>

     </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     </>
  )
}

export default JsQuiz