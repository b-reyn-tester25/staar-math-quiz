
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import QUESTION_BANK from "./QuestionData";
import "./index.css";

export default function App() {
  const today = new Date().toISOString().split("T")[0];
  const availableDates = Object.keys(QUESTION_BANK);
  const [selectedDate, setSelectedDate] = useState(today);
  const [answers, setAnswers] = useState(() =>
    JSON.parse(localStorage.getItem(selectedDate) || "{}")
  );
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(selectedDate) || "{}");
    setAnswers(stored);
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem(selectedDate, JSON.stringify(answers));
  }, [answers, selectedDate]);

  const handleAnswer = (index, selected) => {
    if (answers[index]) return;
    const correct = QUESTION_BANK[selectedDate][index].answer === selected;
    const updated = { ...answers, [index]: { selected, correct } };
    setAnswers(updated);
    if (correct) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 1500);
    }
  };

  const resetQuiz = () => {
    localStorage.removeItem(selectedDate);
    setAnswers({});
  };

  const totalStars = availableDates.reduce((sum, date) => {
    const stored = JSON.parse(localStorage.getItem(date) || "{}");
    return sum + Object.values(stored).filter((a) => a?.correct).length;
  }, 0);

  const isFuture = selectedDate > today;
  const allAnswered = Object.keys(answers).length === 4;

  return (
    <div className="app-container">
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
        <>
          {QUESTION_BANK[selectedDate].map((q, i) => (
            <div className="quiz-card" key={i}>
              <p><strong>{i + 1}. {q.question}</strong></p>
              {q.options.map((opt) => (
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
          ))}
          {allAnswered && (
            <p className="finished-message">🎉 You finished today’s questions! Great job!</p>
          )}
        </>
      )}
      {confetti && <Confetti />}
    </div>
  );
}
