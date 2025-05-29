export function getFilteredQuestions(data, difficulty, tag) {
  return data.filter(
    (q) =>
      (difficulty === "all" || q.difficulty === Number(difficulty)) &&
      (tag === "all" || q.tag === tag)
  );
}

export function getRandomQuestion(data, difficulty, tag) {
  const filteredQuestions = getFilteredQuestions(data, difficulty, tag);
  return filteredQuestions[
    Math.floor(Math.random() * filteredQuestions.length)
  ];
}
