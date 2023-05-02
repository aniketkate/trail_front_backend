
import React, {  useState } from "react";
import "./Rquizestyle.css"

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Venus", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
    answer: "Vatican City",
  },
];

function RQuiz() {
  const [result, setResult] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const[count,setCount]=useState(0);

  const handleAnswer = (answer) => {
    setCount(count+1);
    const isCorrect = answer === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        if (score === questions.length) {
            setResult("You Won!");
            setScore(0);
      
        }
        else if (count=== questions.length) {
            setResult("You loose!");
            setScore(0);
        }
    }
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <button className="option" key={index} onClick={() => handleAnswer(option)}>
        {option}
      </button>
    ));
  };
 

  return (
    <div className="rquiz">
      <h2 className="question">{questions[currentQuestion].question}</h2>
      <div className="options">
          {renderOptions()}
      </div>
      <div className={result ? 'result' : 'hide'}>{result}</div>
      
    </div>
  );
}

export default RQuiz;
