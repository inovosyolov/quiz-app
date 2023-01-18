import React, {useState} from 'react';
import './App.scss';

function App() {

  const questions = [
    {
      questionText: 'Столица РФ?',
      answerOptions : [
        {answerText: 'Москва', isCorrect: true},
        {answerText: 'Новосибирск', isCorrect: false},
        {answerText: 'Челябинск', isCorrect: false},
        {answerText: 'Сочи', isCorrect: false}
      ]
    },
    {
      questionText: 'Скольки метрам равна 1 миля?',
      answerOptions : [
        {answerText: '500 метров', isCorrect: false},
        {answerText: '609 метров', isCorrect: false},
        {answerText: '1000 метров', isCorrect: false},
        {answerText: '1609 метров', isCorrect: true}
      ]
    },
    {
      questionText: 'Какова температура замерзания воды?',
      answerOptions : [
        {answerText: '-2 градуса', isCorrect: false},
        {answerText: '0 градусов', isCorrect: true},
        {answerText: '-10 градусов', isCorrect: false},
        {answerText: '+1 градус', isCorrect: false}
      ]
    },
    {
      questionText: 'Какая из этих жидкостей самая легкая?',
      answerOptions : [
        {answerText: 'Вода', isCorrect: false},
        {answerText: 'Масло', isCorrect: false},
        {answerText: 'Бензин', isCorrect: true},
        {answerText: 'Лимонад', isCorrect: false}
      ]
    }
  ]
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)  

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowResult(true)
    }
  }

  const refreshGame = () => {
    setShowResult(false)
    setScore(0)
    setCurrentQuestion(0)
  }

  return (
    <div className="container">
      <h1 className="title">Quiz Application</h1>
        <div className="quiz">
          {
            !showResult
              ? <div className="quiz__wrapper">
                  <h2 className="quiz__question-number">Вопрос {currentQuestion + 1} / <span>{questions.length}</span></h2>
                  <p className="quiz__question-summary">{questions[currentQuestion].questionText}</p>
                  <div className="quiz__answer">
                  {questions[currentQuestion].answerOptions.map(item => (
                    <button onClick={() => handleAnswerOptionClick(item.isCorrect)} className="btn quiz__answer__btn">{item.answerText}</button>
                  ))}
                  </div>
                </div>
              : <div className="showresult">
                  <h1 className="showsresult__text">Вы ответили правильно на {score} вопрос</h1>
                  <button onClick={refreshGame} className="btn showresult__btn">Пройти заново</button>
                </div> 
          } 
        </div>
    </div>
  );
}

export default App;
