import React from 'react'
import { useState } from 'react';

import CssQuizData from '../data/CssQuizData'


function Cssquiz() {

  const [value, setvalue] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handlePrev = () => {
    setvalue(value - 1);
    setSelectedAnswer(null);
  }

  const handNext = () => {
    setvalue(value + 1);
    setSelectedAnswer(null);
  }

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === CssQuizData[value].answer;
    
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
    
    const isCorrect = option === CssQuizData[value].answer;
    
    if (option === selectedAnswer) {
      return isCorrect ? 'option correct' : 'option wrong';
    }
    
    if (isCorrect) {
      return 'option correct-answer';
    }
    
    return 'option';
  }
  console.log(CssQuizData.lenght)

  return (
    <>



      <div className='quiz-section'>
        <div className='score-info'>
          <p>Score: {score}/{CssQuizData.length}</p>
          <p>Question {value + 1}/{CssQuizData.length}</p>
        </div>
        {CssQuizData[value].options.map((data) => (
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
            {selectedAnswer === CssQuizData[value].answer ? '✓ Correct!' : '✗ Wrong!'}
          </p>
        )}

        <div className="button">
          <button disabled={value < 1} className='navigate' onClick={handlePrev}>Previous</button>
          <button disabled={value >= CssQuizData.length - 1} className='navigate' onClick={handNext}>Next</button></div>

      </div>








    </>
  )
}

export default Cssquiz;