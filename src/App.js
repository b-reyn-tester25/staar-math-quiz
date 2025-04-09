import React, { useState, useEffect } from "react";
import "./index.css";
import Confetti from 'react-confetti';

const QUESTION_BANK = {
  "2025-04-09": [
    {
      "question": "What is 1 \u00d7 6?",
      "options": [
        6,
        5,
        7,
        8
      ],
      "answer": 6,
      "explanation": "1 \u00d7 6 equals 6."
    },
    {
      "question": "What is 12 \u00f7 2?",
      "options": [
        6,
        6,
        14,
        8
      ],
      "answer": 6,
      "explanation": "12 \u00f7 2 equals 6."
    },
    {
      "question": "What is 3 \u00d7 6?",
      "options": [
        18,
        15,
        21,
        24
      ],
      "answer": 18,
      "explanation": "3 \u00d7 6 equals 18."
    },
    {
      "question": "What is the perimeter of a rectangle with length 4 and width 5?",
      "options": [
        18,
        8,
        10,
        9
      ],
      "answer": 18,
      "explanation": "Perimeter = 2 \u00d7 (4 + 5) = 18."
    }
  ],
  "2025-04-10": [
    {
      "question": "What is 2 \u00d7 6?",
      "options": [
        12,
        10,
        14,
        16
      ],
      "answer": 12,
      "explanation": "2 \u00d7 6 equals 12."
    },
    {
      "question": "If you have 3 apples and you pick 5 more, how many apples do you have?",
      "options": [
        8,
        6,
        13,
        6
      ],
      "answer": 8,
      "explanation": "3 + 5 equals 8."
    },
    {
      "question": "What is 24 \u00f7 2?",
      "options": [
        12,
        12,
        28,
        16
      ],
      "answer": 12,
      "explanation": "24 \u00f7 2 equals 12."
    },
    {
      "question": "If you have 5 apples and you pick 5 more, how many apples do you have?",
      "options": [
        10,
        10,
        15,
        8
      ],
      "answer": 10,
      "explanation": "5 + 5 equals 10."
    }
  ],
  "2025-04-11": [
    {
      "question": "Which fraction is greater: 3/10 or 2/10?",
      "options": [
        "3/10",
        "2/10",
        "4/10",
        "3/5"
      ],
      "answer": "3/10",
      "explanation": "3/10 is greater than 2/10."
    },
    {
      "question": "What is 4 \u00d7 6?",
      "options": [
        24,
        20,
        28,
        32
      ],
      "answer": 24,
      "explanation": "4 \u00d7 6 equals 24."
    },
    {
      "question": "Which fraction is greater: 5/10 or 4/10?",
      "options": [
        "5/10",
        "4/10",
        "6/10",
        "5/5"
      ],
      "answer": "5/10",
      "explanation": "5/10 is greater than 4/10."
    },
    {
      "question": "If you have 6 apples and you pick 5 more, how many apples do you have?",
      "options": [
        11,
        12,
        16,
        9
      ],
      "answer": 11,
      "explanation": "6 + 5 equals 11."
    }
  ],
  "2025-04-12": [
    {
      "question": "If you have 4 apples and you pick 5 more, how many apples do you have?",
      "options": [
        9,
        8,
        14,
        7
      ],
      "answer": 9,
      "explanation": "4 + 5 equals 9."
    },
    {
      "question": "What is 30 \u00f7 2?",
      "options": [
        15,
        15,
        35,
        20
      ],
      "answer": 15,
      "explanation": "30 \u00f7 2 equals 15."
    },
    {
      "question": "What is the perimeter of a rectangle with length 6 and width 7?",
      "options": [
        26,
        12,
        14,
        13
      ],
      "answer": 26,
      "explanation": "Perimeter = 2 \u00d7 (6 + 7) = 26."
    },
    {
      "question": "What is 42 \u00f7 2?",
      "options": [
        21,
        21,
        49,
        28
      ],
      "answer": 21,
      "explanation": "42 \u00f7 2 equals 21."
    }
  ],
  "2025-04-13": [
    {
      "question": "What is 30 \u00f7 2?",
      "options": [
        15,
        15,
        35,
        20
      ],
      "answer": 15,
      "explanation": "30 \u00f7 2 equals 15."
    },
    {
      "question": "If you have 6 apples and you pick 5 more, how many apples do you have?",
      "options": [
        11,
        12,
        16,
        9
      ],
      "answer": 11,
      "explanation": "6 + 5 equals 11."
    },
    {
      "question": "What is 7 \u00d7 6?",
      "options": [
        42,
        35,
        49,
        56
      ],
      "answer": 42,
      "explanation": "7 \u00d7 6 equals 42."
    },
    {
      "question": "What is the perimeter of a rectangle with length 8 and width 9?",
      "options": [
        34,
        16,
        18,
        17
      ],
      "answer": 34,
      "explanation": "Perimeter = 2 \u00d7 (8 + 9) = 34."
    }
  ],
  "2025-04-14": [
    {
      "question": "What is 6 \u00d7 6?",
      "options": [
        36,
        30,
        42,
        48
      ],
      "answer": 36,
      "explanation": "6 \u00d7 6 equals 36."
    },
    {
      "question": "Which fraction is greater: 7/10 or 6/10?",
      "options": [
        "7/10",
        "6/10",
        "8/10",
        "7/5"
      ],
      "answer": "7/10",
      "explanation": "7/10 is greater than 6/10."
    },
    {
      "question": "What is 8 in expanded form?",
      "options": [
        800,
        80,
        8000,
        4000
      ],
      "answer": 800,
      "explanation": "8 \u00d7 100 equals 800."
    },
    {
      "question": "Which fraction is greater: 9/10 or 8/10?",
      "options": [
        "9/10",
        "8/10",
        "10/10",
        "9/5"
      ],
      "answer": "9/10",
      "explanation": "9/10 is greater than 8/10."
    }
  ],
  "2025-04-15": [
    {
      "question": "What is 7 in expanded form?",
      "options": [
        700,
        70,
        7000,
        3500
      ],
      "answer": 700,
      "explanation": "7 \u00d7 100 equals 700."
    },
    {
      "question": "What is the perimeter of a rectangle with length 8 and width 9?",
      "options": [
        34,
        16,
        18,
        17
      ],
      "answer": 34,
      "explanation": "Perimeter = 2 \u00d7 (8 + 9) = 34."
    },
    {
      "question": "What is 9 \u00d7 6?",
      "options": [
        54,
        45,
        63,
        72
      ],
      "answer": 54,
      "explanation": "9 \u00d7 6 equals 54."
    },
    {
      "question": "What is 10 \u00d7 6?",
      "options": [
        60,
        50,
        70,
        80
      ],
      "answer": 60,
      "explanation": "10 \u00d7 6 equals 60."
    }
  ],
  "2025-04-16": [
    {
      "question": "What is 48 \u00f7 2?",
      "options": [
        24,
        24,
        56,
        32
      ],
      "answer": 24,
      "explanation": "48 \u00f7 2 equals 24."
    },
    {
      "question": "Which fraction is greater: 9/10 or 8/10?",
      "options": [
        "9/10",
        "8/10",
        "10/10",
        "9/5"
      ],
      "answer": "9/10",
      "explanation": "9/10 is greater than 8/10."
    },
    {
      "question": "What is 10 in expanded form?",
      "options": [
        1000,
        100,
        10000,
        5000
      ],
      "answer": 1000,
      "explanation": "10 \u00d7 100 equals 1000."
    },
    {
      "question": "What is 11 + 10?",
      "options": [
        21,
        16,
        22,
        6
      ],
      "answer": 21,
      "explanation": "11 + 10 equals 21."
    }
  ],
  "2025-04-17": [
    {
      "question": "What is 9 + 10?",
      "options": [
        19,
        14,
        18,
        4
      ],
      "answer": 19,
      "explanation": "9 + 10 equals 19."
    },
    {
      "question": "What is the perimeter of a rectangle with length 10 and width 11?",
      "options": [
        42,
        20,
        22,
        21
      ],
      "answer": 42,
      "explanation": "Perimeter = 2 \u00d7 (10 + 11) = 42."
    },
    {
      "question": "What is 11 in expanded form?",
      "options": [
        1100,
        110,
        11000,
        5500
      ],
      "answer": 1100,
      "explanation": "11 \u00d7 100 equals 1100."
    },
    {
      "question": "What is 12 in expanded form?",
      "options": [
        1200,
        120,
        12000,
        6000
      ],
      "answer": 1200,
      "explanation": "12 \u00d7 100 equals 1200."
    }
  ],
  "2025-04-18": [
    {
      "question": "What is the perimeter of a rectangle with length 10 and width 11?",
      "options": [
        42,
        20,
        22,
        21
      ],
      "answer": 42,
      "explanation": "Perimeter = 2 \u00d7 (10 + 11) = 42."
    },
    {
      "question": "What is the perimeter of a rectangle with length 11 and width 12?",
      "options": [
        46,
        22,
        24,
        23
      ],
      "answer": 46,
      "explanation": "Perimeter = 2 \u00d7 (11 + 12) = 46."
    },
    {
      "question": "What is 12 + 10?",
      "options": [
        22,
        17,
        24,
        7
      ],
      "answer": 22,
      "explanation": "12 + 10 equals 22."
    },
    {
      "question": "What is 13 \u00d7 6?",
      "options": [
        78,
        65,
        91,
        104
      ],
      "answer": 78,
      "explanation": "13 \u00d7 6 equals 78."
    }
  ],
  "2025-04-19": [
    {
      "question": "What is the perimeter of a rectangle with length 11 and width 12?",
      "options": [
        46,
        22,
        24,
        23
      ],
      "answer": 46,
      "explanation": "Perimeter = 2 \u00d7 (11 + 12) = 46."
    },
    {
      "question": "What is the perimeter of a rectangle with length 12 and width 13?",
      "options": [
        50,
        24,
        26,
        25
      ],
      "answer": 50,
      "explanation": "Perimeter = 2 \u00d7 (12 + 13) = 50."
    },
    {
      "question": "Which fraction is greater: 13/10 or 12/10?",
      "options": [
        "13/10",
        "12/10",
        "14/10",
        "13/5"
      ],
      "answer": "13/10",
      "explanation": "13/10 is greater than 12/10."
    },
    {
      "question": "What is 14 \u00d7 6?",
      "options": [
        84,
        70,
        98,
        112
      ],
      "answer": 84,
      "explanation": "14 \u00d7 6 equals 84."
    }
  ],
  "2025-04-20": [
    {
      "question": "What is 12 + 10?",
      "options": [
        22,
        17,
        24,
        7
      ],
      "answer": 22,
      "explanation": "12 + 10 equals 22."
    },
    {
      "question": "What is 13 \u00d7 6?",
      "options": [
        78,
        65,
        91,
        104
      ],
      "answer": 78,
      "explanation": "13 \u00d7 6 equals 78."
    },
    {
      "question": "What is 14 \u00d7 6?",
      "options": [
        84,
        70,
        98,
        112
      ],
      "answer": 84,
      "explanation": "14 \u00d7 6 equals 84."
    },
    {
      "question": "What is 15 \u00d7 6?",
      "options": [
        90,
        75,
        105,
        120
      ],
      "answer": 90,
      "explanation": "15 \u00d7 6 equals 90."
    }
  ],
  "2025-04-21": [
    {
      "question": "What is 13 + 10?",
      "options": [
        23,
        18,
        26,
        8
      ],
      "answer": 23,
      "explanation": "13 + 10 equals 23."
    },
    {
      "question": "If you have 14 apples and you pick 5 more, how many apples do you have?",
      "options": [
        19,
        28,
        24,
        17
      ],
      "answer": 19,
      "explanation": "14 + 5 equals 19."
    },
    {
      "question": "What is 90 \u00f7 2?",
      "options": [
        45,
        45,
        105,
        60
      ],
      "answer": 45,
      "explanation": "90 \u00f7 2 equals 45."
    },
    {
      "question": "Which fraction is greater: 16/10 or 15/10?",
      "options": [
        "16/10",
        "15/10",
        "17/10",
        "16/5"
      ],
      "answer": "16/10",
      "explanation": "16/10 is greater than 15/10."
    }
  ],
  "2025-04-22": [
    {
      "question": "What is 14 \u00d7 6?",
      "options": [
        84,
        70,
        98,
        112
      ],
      "answer": 84,
      "explanation": "14 \u00d7 6 equals 84."
    },
    {
      "question": "What is 15 in expanded form?",
      "options": [
        1500,
        150,
        15000,
        7500
      ],
      "answer": 1500,
      "explanation": "15 \u00d7 100 equals 1500."
    },
    {
      "question": "What is the perimeter of a rectangle with length 16 and width 17?",
      "options": [
        66,
        32,
        34,
        33
      ],
      "answer": 66,
      "explanation": "Perimeter = 2 \u00d7 (16 + 17) = 66."
    },
    {
      "question": "What is 17 \u00d7 6?",
      "options": [
        102,
        85,
        119,
        136
      ],
      "answer": 102,
      "explanation": "17 \u00d7 6 equals 102."
    }
  ],
  "2025-04-23": [
    {
      "question": "What is 90 \u00f7 2?",
      "options": [
        45,
        45,
        105,
        60
      ],
      "answer": 45,
      "explanation": "90 \u00f7 2 equals 45."
    },
    {
      "question": "Which fraction is greater: 16/10 or 15/10?",
      "options": [
        "16/10",
        "15/10",
        "17/10",
        "16/5"
      ],
      "answer": "16/10",
      "explanation": "16/10 is greater than 15/10."
    },
    {
      "question": "If you have 17 apples and you pick 5 more, how many apples do you have?",
      "options": [
        22,
        34,
        27,
        20
      ],
      "answer": 22,
      "explanation": "17 + 5 equals 22."
    },
    {
      "question": "What is 18 in expanded form?",
      "options": [
        1800,
        180,
        18000,
        9000
      ],
      "answer": 1800,
      "explanation": "18 \u00d7 100 equals 1800."
    }
  ],
  "2025-04-24": [
    {
      "question": "Which fraction is greater: 16/10 or 15/10?",
      "options": [
        "16/10",
        "15/10",
        "17/10",
        "16/5"
      ],
      "answer": "16/10",
      "explanation": "16/10 is greater than 15/10."
    },
    {
      "question": "What is 17 in expanded form?",
      "options": [
        1700,
        170,
        17000,
        8500
      ],
      "answer": 1700,
      "explanation": "17 \u00d7 100 equals 1700."
    },
    {
      "question": "What is the perimeter of a rectangle with length 18 and width 19?",
      "options": [
        74,
        36,
        38,
        37
      ],
      "answer": 74,
      "explanation": "Perimeter = 2 \u00d7 (18 + 19) = 74."
    },
    {
      "question": "What is the perimeter of a rectangle with length 19 and width 20?",
      "options": [
        78,
        38,
        40,
        39
      ],
      "answer": 78,
      "explanation": "Perimeter = 2 \u00d7 (19 + 20) = 78."
    }
  ],
  "2025-04-25": [
    {
      "question": "If you have 17 apples and you pick 5 more, how many apples do you have?",
      "options": [
        22,
        34,
        27,
        20
      ],
      "answer": 22,
      "explanation": "17 + 5 equals 22."
    },
    {
      "question": "If you have 18 apples and you pick 5 more, how many apples do you have?",
      "options": [
        23,
        36,
        28,
        21
      ],
      "answer": 23,
      "explanation": "18 + 5 equals 23."
    },
    {
      "question": "What is the perimeter of a rectangle with length 19 and width 20?",
      "options": [
        78,
        38,
        40,
        39
      ],
      "answer": 78,
      "explanation": "Perimeter = 2 \u00d7 (19 + 20) = 78."
    },
    {
      "question": "What is 120 \u00f7 2?",
      "options": [
        60,
        60,
        140,
        80
      ],
      "answer": 60,
      "explanation": "120 \u00f7 2 equals 60."
    }
  ],
  "2025-04-26": [
    {
      "question": "If you have 18 apples and you pick 5 more, how many apples do you have?",
      "options": [
        23,
        36,
        28,
        21
      ],
      "answer": 23,
      "explanation": "18 + 5 equals 23."
    },
    {
      "question": "If you have 19 apples and you pick 5 more, how many apples do you have?",
      "options": [
        24,
        38,
        29,
        22
      ],
      "answer": 24,
      "explanation": "19 + 5 equals 24."
    },
    {
      "question": "What is 20 in expanded form?",
      "options": [
        2000,
        200,
        20000,
        10000
      ],
      "answer": 2000,
      "explanation": "20 \u00d7 100 equals 2000."
    },
    {
      "question": "If you have 21 apples and you pick 5 more, how many apples do you have?",
      "options": [
        26,
        42,
        31,
        24
      ],
      "answer": 26,
      "explanation": "21 + 5 equals 26."
    }
  ]
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
