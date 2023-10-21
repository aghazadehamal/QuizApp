import React, { useState } from 'react';
import QuestionCard from './QuestionsCard';

const questions = [

  {
    questionText: '  Azərbaycanın nın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Quba', isCorrect: false },
      { answerText: 'Zaqatala', isCorrect: false },
      { answerText: '		Bakı', isCorrect: true  },
      { answerText: 'Lerik', isCorrect: false },
    ],
  },
  {
    questionText: ' Almaniyanın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Vyana', isCorrect: false },
      { answerText: 'Berlin', isCorrect: true },
      { answerText: 'Buenos Ayres', isCorrect: false },
      { answerText: 'London', isCorrect: false },
    ],
  },

  {
    questionText: ' Avstriya nın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Buenos Ayres', isCorrect: false },
     
      { answerText: 'London', isCorrect: false },
      { answerText: '	Vyana', isCorrect: true  },
    ],
  },


  {
    questionText: ' Argentina nın paytaxtı haradır?',
    answerOptions: [
      { answerText: '	Buenos Ayres', isCorrect: true  },
      { answerText: 'Brüssel', isCorrect: false },
      { answerText: 'Praqa', isCorrect: false },
    
      { answerText: 'Kopenhagen', isCorrect: false },
    ],
  },
  {
    questionText: ' Böyük Britaniya nın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Zaqreb', isCorrect: false },
      { answerText: '		London', isCorrect: true  },
      { answerText: '	Havana', isCorrect: false },
     
      { answerText: 'Lissabon', isCorrect: false },
    ],
  },

  {
    questionText: '  Belçika nın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Dublin', isCorrect: false },
      { answerText: 'Zaqreb', isCorrect: false },
      { answerText: '		Brüssel', isCorrect: true  },
      { answerText: 'Kopenhagen', isCorrect: false },
    ],
  },
  {
    questionText: '   Çexiya nın paytaxtı haradır?',
    answerOptions: [
      { answerText: 'Afina', isCorrect: false },
      { answerText: 'Oslo', isCorrect: false },
      { answerText: '		Praqa', isCorrect: true  },
      { answerText: 'Lima', isCorrect: false },
    ],
  },

  {
    questionText: '  Danimarka nın paytaxtı haradır?',
    answerOptions: [
      { answerText: '	Sofiya', isCorrect: false },
      { answerText: '		Kopenhagen', isCorrect: true  },
      { answerText: 'Tbilisi', isCorrect: false },
    
      { answerText: 'Lima', isCorrect: false },
    ],
  },
  {
    questionText: '   Gürcüstan nın paytaxtı haradır?',
    answerOptions: [
      { answerText: '		Tbilisi', isCorrect: true  },
      { answerText: 'Kopenhagen', isCorrect: false },
      { answerText: 'Lissabon', isCorrect: false },
     
      { answerText: 'Oslo', isCorrect: false },
    ],
  },
  {
    questionText: '   Hindistan nın paytaxtı haradır?',
    answerOptions: [
      { answerText: '	Sofiya', isCorrect: false },
      { answerText: 'Tbilisi', isCorrect: false },
      
      { answerText: 'Dublin', isCorrect: false },
      { answerText: '			Dehli', isCorrect: true  }
    ],
  },
 
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
       <div className="score-board">
       <span className="score">Skor: {score} / {questions.length}</span>
     </div>
     
      ) : (
        <>
         <QuestionCard
  question={questions[currentQuestion].questionText}
  options={questions[currentQuestion].answerOptions}
  onAnswer={handleAnswer}
  questionNumber={currentQuestion + 1}
  totalQuestions={questions.length}
/>

       <button className="next-button" onClick={handleNextQuestion}>Sonraki</button>

        </>
      )}
    </div>
  );
}

export default Quiz;
