
import { useState, useEffect } from "react";

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
  ]
};

export default function App() {
  const today = new Date().toISOString().split("T")[0];
  const questions = QUESTION_BANK[today] || [];
  const [answers, setAnswers] = useState(() => JSON.parse(localStorage.getItem(today) || "{}"));

  useEffect(() => {
    localStorage.setItem(today, JSON.stringify(answers));
  }, [answers, today]);

  const handleAnswer = (index, selected) => {
    if (answers[index]) return;
    const correct = questions[index].answer === selected;
    setAnswers({ ...answers, [index]: { selected, correct } });
  };

  return (
    <div>
      <h1>STAAR Daily Math Practice</h1>
      {questions.length === 0 && <p>No questions for today!</p>}
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "1.5rem", padding: "1rem", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <p><strong>{i + 1}. {q.question}</strong></p>
          {q.options.map(opt => (
            <button
              key={opt}
              onClick={() => handleAnswer(i, opt)}
              disabled={!!answers[i]}
              style={{
                margin: "4px",
                padding: "8px 12px",
                background: answers[i]?.selected === opt
                  ? answers[i].correct
                    ? "#d4edda"
                    : "#f8d7da"
                  : "#e2e3e5",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {opt}
            </button>
          ))}
          {answers[i] && (
            <div style={{ marginTop: "8px", fontStyle: "italic" }}>
              {answers[i].correct ? "✅ Correct! " : "❌ Not quite. "}
              {q.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
