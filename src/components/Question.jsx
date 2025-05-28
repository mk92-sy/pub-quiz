import React, { useState } from "react";

const questions = [
    { question: "HTML에서 문서의 제목을 정의하는 태그는?", answer: ["title"], tag: "html", difficulty: 1, explanation: "title 태그는 웹 브라우저의 제목 표시줄에 표시됩니다." },
    { question: "CSS에서 요소의 배경색을 변경하는 속성은?", answer: ["background-color", "bg-color"], tag: "css", difficulty: 2, explanation: "background-color 속성을 사용하여 배경색을 지정할 수 있습니다." },
    { question: "JavaScript에서 변수 선언 시 사용하는 키워드는?", answer: ["var", "let", "const"], tag: "javascript", difficulty: 3, explanation: "var, let, const 키워드가 있으며, var는 ES6 이전 방식입니다." }
];

function getFilteredQuestions(difficulty, tag) {
    return questions.filter(q => 
        (difficulty === "all" || q.difficulty === Number(difficulty)) &&
        (tag === "all" || q.tag === tag)
    );
}

function getRandomQuestion(difficulty, tag) {
    const filteredQuestions = getFilteredQuestions(difficulty, tag);
    return filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
}

function Question() {
    const [difficulty, setDifficulty] = useState("all");
    const [tag, setTag] = useState("all");
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion(difficulty, tag));
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const checkAnswer = () => {
        if (currentQuestion.answer.some(ans => ans.toLowerCase() === userAnswer.toLowerCase())) {
            setFeedback("정답입니다!");
        } else {
            setFeedback(`틀렸습니다. ${currentQuestion.explanation}`);
        }
    };

    const loadNewQuestion = () => {
        setCurrentQuestion(getRandomQuestion(difficulty, tag));
        setUserAnswer("");
        setFeedback("");
    };

    return (
        <div>
            {/* 난이도 선택 */}
            <div>
                <label>
                    <input type="radio" name="difficulty" value="1" onChange={(e) => setDifficulty(e.target.value)} /> 난이도 1
                </label>
                <label>
                    <input type="radio" name="difficulty" value="2" onChange={(e) => setDifficulty(e.target.value)} /> 난이도 2
                </label>
                <label>
                    <input type="radio" name="difficulty" value="3" onChange={(e) => setDifficulty(e.target.value)} /> 난이도 3
                </label>
                <label>
                    <input type="radio" name="difficulty" value="all" onChange={(e) => setDifficulty(e.target.value)} defaultChecked /> 골고루 표시
                </label>
            </div>

            {/* 카테고리 선택 */}
            <div>
                <label>
                    <input type="radio" name="tag" value="html" onChange={(e) => setTag(e.target.value)} /> HTML
                </label>
                <label>
                    <input type="radio" name="tag" value="css" onChange={(e) => setTag(e.target.value)} /> CSS
                </label>
                <label>
                    <input type="radio" name="tag" value="javascript" onChange={(e) => setTag(e.target.value)} /> JavaScript
                </label>
                <label>
                    <input type="radio" name="tag" value="all" onChange={(e) => setTag(e.target.value)} defaultChecked /> 골고루 표시
                </label>
            </div>

            {/* 문제 표시 */}
            <p><strong>난이도: {"★".repeat(currentQuestion.difficulty)}</strong></p>
            <p><strong>카테고리: {currentQuestion.tag}</strong></p>
            <p>{currentQuestion.question}</p>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>제출</button>
            <p>{feedback}</p>
            <button onClick={loadNewQuestion}>다른 문제 불러오기</button>
        </div>
    );
}

export default Question;
