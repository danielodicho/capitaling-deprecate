import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [selectedOptionColumn1, setSelectedOptionColumn1] = useState('');
  const [selectedOptionColumn2, setSelectedOptionColumn2] = useState('');
  const optionsColumn1 = ['United States', 'India', 'South Korea', 'Norway']; 
  const optionsColumn2 = ['New Delhi', 'Seoul', 'Washington D.C', 'Oslo'];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You selected: ${selectedOptionColumn1} and ${selectedOptionColumn2}`);
  };

  return (
    <div className="quiz-container">
      <h1>Country Flag</h1>
      <div className="flag-container">
        <img src="/assets/flags/united-states-flag.webp" alt="United States Flag" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="options-container">
          <div className="options-column">
            {optionsColumn1.map((option) => (
              <label key={option} className="option-label">
                <input
                  type="radio"
                  name="quizOptionColumn1"
                  value={option}
                  checked={selectedOptionColumn1 === option}
                  onChange={(e) => setSelectedOptionColumn1(e.target.value)}
                />
                {option}
            </label>
            ))}
          </div>
          <div className="options-column">
            {optionsColumn2.map((option) => (
              <label key={option} className="option-label">
                <input
                  type="radio"
                  name="quizOptionColumn2"
                  value={option}
                  checked={selectedOptionColumn2 === option}
                  onChange={(e) => setSelectedOptionColumn2(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Quiz;
