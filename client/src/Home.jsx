import React, { useState } from "react";

function Home() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            const newTodo = {
                text: inputValue,
                time: new Date().toLocaleString(),
                liked: false,
                disliked: false
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    const handleToggleLike = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, liked: !todo.liked, disliked: false };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleToggleDislike = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, disliked: !todo.disliked, liked: false };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Paklausk</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.text}</span> <span>({todo.time})</span>
                        <button onClick={() => handleToggleLike(index)}>
                            {todo.liked ? "Unlike" : "Like"}
                        </button>
                        <button onClick={() => handleToggleDislike(index)}>
                            {todo.disliked ? "Undislike" : "Dislike"}
                        </button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
