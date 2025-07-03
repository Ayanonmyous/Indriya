import questions from "../question.json";
import React, { useState } from "react";

const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionsChange = (qId, score) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    setScore(total);
    setSubmitted(true);
  };

  const getResult = () => {
    if (score <= 10)
      return {
        message: "🎉 You seem mentally fit. Keep it up!",
        image: "../src/images/assessment/low.png", // replace with actual image path
      };
    if (score <= 20)
      return {
        message:
          "🙂 Mild signs of stress. Take breaks, rest well, and stay connected.",
        image: "../src/images/assessment/mild.png",
      };
    if (score <= 30)
      return {
        message:
          "😟 Moderate stress. Consider relaxing activities and talking to someone.",
        image: "../src/images/assessment/moderate.png",
      };
    return {
      message:
        "🚨 High distress level. Please seek help from a mental health professional.",
      image: "../src/images/assessment/high.png",
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-6 w-full mt-10 text-white mt-20">
      <h1 className="text-4xl  mt-10 text-center text-blue-400 mb-6 font-extrabold">
        Mental Fitness Check
      </h1>

      {!submitted ? (
        <div className="space-y-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-1g"
            >
              <p className="text-xl font-semibold mb-4 text-blue-200">
                {q.text}
              </p>
              <div className="space-y-3">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer text-gray-200 hover:text-white "
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt.score}
                      onChange={() => handleOptionsChange(q.id, opt.score)}
                      className="accent-blue-500 w-5 h-5"
                    />
                    <span className="text-base">{opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            className="w-full  bg-gradient-to-r from-blue-600 to-purple-600  hover:from bg-blue-700  hover:to-purple-700 transition py-3 rounded-xl text-1g font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center mt-8 bg-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold  mb-3 text-blue-300">
            Your Score: {score} / {questions.length * 3}
          </h2>

          {(() => {
            const { message, image } = getResult();
            return (
              <>
                <img
                  src={image}
                  alt="Assessment Result"
                  className="mx-auto w-48 h-48 object-contain rounded-xl mb-6 border border-gray-600 "
                />
                <p className="text-lg font-semibold text-gray-200">{message}</p>
              </>
            );
          })()}

          <button
            className="mt-6 bg-white text-black py-2 px-6  rounded-xl hover:bg-gray-200 transition font-medium"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setScore(0);
            }}
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
};

export default Assessment;
