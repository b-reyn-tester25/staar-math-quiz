import React, { useState, useEffect } from "react";
import "./index.css";
import Confetti from 'react-confetti';

const QUESTION_BANK = {
  "2025-04-09": [
    {
      question: "What is 7 x 6?",
      options: ["42", "36", "48", "56"],
      answer: "42",
      explanation: "7 times 6 equals 42 because 7 groups of 6 make 42."
    },
    {
      question: "Which number is even?",
      options: ["13", "22", "17", "35"],
      answer: "22",
      explanation: "Even numbers end in 0, 2, 4, 6, or 8."
    },
    {
      question: "Which is the correct way to write three hundred five?",
      options: ["350", "305", "3005", "35"],
      answer: "305",
      explanation: "305 has 3 hundreds, 0 tens, and 5 ones."
    },
    {
      question: "What is the perimeter of a rectangle with length 4 and width 3?",
      options: ["7", "14", "12", "24"],
      answer: "14",
      explanation: "Perimeter = 2 x (4 + 3) = 14."
    }
  ],
  // Add additional days of questions following similar format...
};

export default function App() {
  const today = new Date().toISOString().split("T")[0];
  const availableDates = Object.keys(QUESTION_BANK);
  const [selectedDate, setSelectedDate] = useState(today);
  const [answers, setAnswers] = useState(() =>
    JSON.parse(localStorage.getItem(selectedDate) || "{}")
  );
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem(selectedDate) || "{}"));
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem(selectedDate, JSON.stringify(answers));
  }, [answers, selectedDate]);

  const handleAnswer = (index, selected) => {
    if (answers[index]) return;
    const correct = QUESTION_BANK[selectedDate][index].answer === selected;
    setAnswers({ ...answers, [index]: { selected, correct } });
    if (correct) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 2000);  // Show confetti for 2 seconds
    }
  };

  const resetQuiz = () => {
    localStorage.removeItem(selectedDate);
    setAnswers({});
  };

  const totalStars = availableDates.reduce((sum, date) => {
    const data = JSON.parse(localStorage.getItem(date) || "{}");
    return sum + Object.values(data).filter((a) => a && a.correct === true).length;
  }, 0);

  const isFuture = selectedDate > today;

  return (
    <div>
      <div className="header">
        <h1>🌈 Hi Ryleigh! Let's play and learn! 🥎</h1>
        <div className="score">🌟 Stars Earned: {totalStars}</div>
      </div>

      <div className="date-selector">
        <label>Select a Day: </label>
        <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
          {availableDates.map((d) => (
            <option key={d} value={d}>
              {new Date(d).toDateString()}
            </option>
          ))}
        </select>
        <button onClick={resetQuiz} className="restart">🔁 Restart This Day</button>
      </div>

      {isFuture ? (
        <p className="locked">🔒 Come back tomorrow to unlock these questions!</p>
      ) : (
        QUESTION_BANK[selectedDate].map((q, i) => (
          <div className="quiz-card" key={i}>
            <p><strong>{i + 1}. {q.question}</strong></p>
            {q.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleAnswer(i, opt)}
                disabled={!!answers[i]}
                style={{
                  backgroundColor: answers[i]?.selected === opt
                    ? answers[i].correct ? "#d4edda" : "#f8d7da"
                    : "#f0f0f0"
                }}
              >
                {opt}
              </button>
            ))}
            {answers[i] && (
              <div className="explanation">
                {answers[i].correct ? "✅ Correct! " : "❌ Not quite. "}
                {q.explanation}
              </div>
            )}
          </div>
        ))
      )}

      {confetti && <Confetti />}
    </div>
  );
}