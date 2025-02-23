import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    // Simulate fetching questions from a dummy API
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // Example dummy API
      .then(response => setQuestions(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <h3>Suggested Questions:</h3>
      <ul>
        {questions.map((question) => (
          <li key={question.id} onClick={() => handleQuestionClick(question.body)}>
            {question.title}
          </li>
        ))}
      </ul>

      {selectedAnswer && (
        <div className="answer">
          <h4>Answer:</h4>
          <p>{selectedAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
