import React, { useState } from "react";
import questions from "../../data";
import { Box, Badge, Button } from "../atoms";
import { useSetting } from "../../context/SettingContext";
import { getRandomQuestion } from "../../util";
import SettingBox from "../molecules/SettingBox";

const Question = () => {
  const { setting } = useSetting();
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    getRandomQuestion(questions, setting.difficulty, setting.tag)
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    const userWords = userAnswer.toLowerCase().split(/[\s,]+/);
    const keywords = currentQuestion.answer.map((w) => w.toLowerCase());

    const matchCount = keywords.filter((kw) => userWords.includes(kw)).length;
    const matchRatio = matchCount / keywords.length;

    if (matchRatio >= 0.5) {
      setFeedback("정답입니다!");
    } else {
      setFeedback(`틀렸습니다. ${currentQuestion.explanation}`);
    }
  };

  const loadNewQuestion = () => {
    setCurrentQuestion(
      getRandomQuestion(questions, setting.difficulty, setting.tag)
    );
    setUserAnswer("");
    setFeedback("");
  };

  return (
    <>
      <SettingBox className={isSettingOpen ? "open" : "close"} />
      <Box
        position="tl"
        direction="column"
        className={`card ${isSettingOpen ? "open" : "close"}`}
      >
        <Button
          className={`btn-setting ${isSettingOpen ? "active" : ""}`}
          onClick={() => {
            setIsSettingOpen(!isSettingOpen);
          }}
        />

        <Box position="tl" gap={6}>
          <h2 className="sub-title">Q.</h2>
          <p className="question-text">{currentQuestion.question}</p>
        </Box>
        <Box gap={4} className="mt-8">
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
        <Box gap={8} className="btn-area w-full mt-16">
          <Button className="btn-submit" onClick={checkAnswer}>
            제출
          </Button>
          <Button className="btn-reload" onClick={loadNewQuestion}>
            다른 문제
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Question;
