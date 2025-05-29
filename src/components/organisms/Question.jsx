import React, { useState } from "react";
import questions from "../../data/data";
import { Radio, Box, Badge, Button } from "../atoms";

function getFilteredQuestions(difficulty, tag) {
  return questions.filter(
    (q) =>
      (difficulty === "all" || q.difficulty === Number(difficulty)) &&
      (tag === "all" || q.tag === tag)
  );
}

function getRandomQuestion(difficulty, tag) {
  const filteredQuestions = getFilteredQuestions(difficulty, tag);
  return filteredQuestions[
    Math.floor(Math.random() * filteredQuestions.length)
  ];
}

function Question() {
  const [difficulty, setDifficulty] = useState("all");
  const [tag, setTag] = useState("all");
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomQuestion(difficulty, tag)
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (
      currentQuestion.answer.some(
        (ans) => ans.toLowerCase() === userAnswer.toLowerCase()
      )
    ) {
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
    <Box position="tl" direction="column" className="card">
      {/* 난이도 선택 */}
      <h2 className="sub-title">Question Difficulty</h2>
      <Box position="tl" gap={6} className="mt-8">
        <Radio
          name="difficulty"
          value="all"
          onChange={(e) => setDifficulty(e.target.value)}
          defaultChecked
        >
          random
        </Radio>
        <Radio
          name="difficulty"
          value="1"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          easy
        </Radio>
        <Radio
          name="difficulty"
          value="2"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          normal
        </Radio>
        <Radio
          name="difficulty"
          value="3"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          hard
        </Radio>
      </Box>

      {/* 카테고리 선택 */}
      <h2 className="sub-title mt-16">Question Category</h2>
      <Box position="tl" gap={6} className="mt-8">
        <Radio
          name="tag"
          value="all"
          onChange={(e) => setTag(e.target.value)}
          defaultChecked
        >
          골고루 표시
        </Radio>
        <Radio name="tag" value="html" onChange={(e) => setTag(e.target.value)}>
          HTML
        </Radio>
        <Radio name="tag" value="css" onChange={(e) => setTag(e.target.value)}>
          CSS
        </Radio>
        <Radio
          name="tag"
          value="javascript"
          onChange={(e) => setTag(e.target.value)}
        >
          JavaScript
        </Radio>
      </Box>

      <Box className="mt-16">
        <h2 className="sub-title">Q.</h2>
        <p>{currentQuestion.question}</p>
      </Box>
      <Box gap={4} className="mt-8">
        {/* <Badge>
          {currentQuestion.difficulty === 3
            ? "hard"
            : currentQuestion.difficulty === 2
            ? "normal"
            : "easy"} 
        </Badge>*/}
        <Badge
          variable={
            currentQuestion.tag === "html"
              ? "orange"
              : currentQuestion.tag === "css"
              ? "sky"
              : "yellow"
          }
        >
          {currentQuestion.tag}
        </Badge>
        {"⭐".repeat(currentQuestion.difficulty)}
      </Box>
      <input
        className="mt-8"
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <p
        className={`${
          currentQuestion.answer.some(
            (ans) => ans.toLowerCase() === userAnswer.toLowerCase()
          )
            ? "success"
            : "error"
        } mt-8`}
      >
        {feedback}
      </p>
      <Box gap={8} className="w-full mt-16">
        <Button onClick={checkAnswer}>제출</Button>
        <Button onClick={loadNewQuestion}>다른 문제 불러오기</Button>
      </Box>
    </Box>
  );
}

export default Question;
