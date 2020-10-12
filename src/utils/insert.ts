export const insert = (arr: string[], newItem: string) => {
  const correctAnswerPosition = Math.floor(Math.random() * 4);

  return [
    ...arr.slice(0, correctAnswerPosition),
    newItem,
    ...arr.slice(correctAnswerPosition),
  ];
};
