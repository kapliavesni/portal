import React, { useState } from "react";
import "./Home.css";

function Home() {
    const [questions, setQuestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddQuestion = () => {
        if (inputValue.trim() !== "") {
            const newQuestion = {
                text: inputValue,
                time: new Date().toLocaleString(),
                liked: false,
                disliked: false
            };
            setQuestions([...questions, newQuestion]);
            setInputValue("");
        }
    };

    const handleDeleteQuestion = (index) => {
        const newQuestions = questions.filter((question, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleToggleLike = (index) => {
        const newQuestions = questions.map((question, i) => {
            if (i === index) {
                return { ...question, liked: !question.liked, disliked: false };
            }
            return question;
        });
        setQuestions(newQuestions);
    };

    const handleToggleDislike = (index) => {
        const newQuestions = questions.map((question, i) => {
            if (i === index) {
                return { ...question, disliked: !question.disliked, liked: false };
            }
            return question;
        });
        setQuestions(newQuestions);
    };

    return (
        <div>
            <h1>Paklausk</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Užduokite klausimą"
                />
                <button onClick={handleAddQuestion}>Paklausti</button>
            </div>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <span>{question.text}</span> <span>({question.time})</span>
                        <button onClick={() => handleToggleLike(index)}>
                            {question.liked ? "Unlike" : "Like"}
                        </button>
                        <button onClick={() => handleToggleDislike(index)}>
                            {question.disliked ? "Undislike" : "Dislike"}
                        </button>
                        <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
