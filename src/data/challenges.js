export const challenges = {
  easy: [
    { id: 1, text: "Say something nice about the player on your left", points: 10 },
    { id: 2, text: "Do 5 jumping jacks", points: 10 },
    { id: 3, text: "Sing 'Happy Birthday'", points: 10 },
    { id: 4, text: "Tell a joke", points: 10 },
    { id: 5, text: "Name 5 fruits in 10 seconds", points: 10 },
    { id: 6, text: "Do your best animal impression", points: 10 },
    { id: 7, text: "Count backwards from 20 to 1", points: 10 },
    { id: 8, text: "Balance on one foot for 10 seconds", points: 10 },
    { id: 9, text: "Say the alphabet backwards", points: 10 },
    { id: 10, text: "Do a silly dance for 5 seconds", points: 10 },
  ],
  medium: [
    { id: 11, text: "Do 10 push-ups", points: 20 },
    { id: 12, text: "Name 10 countries in 20 seconds", points: 20 },
    { id: 13, text: "Speak for 30 seconds without saying 'um' or 'uh'", points: 20 },
    { id: 14, text: "Do 20 jumping jacks without stopping", points: 20 },
    { id: 15, text: "Tell a story using only 10 words", points: 20 },
    { id: 16, text: "Hold a plank position for 30 seconds", points: 20 },
    { id: 17, text: "Name all the months of the year backwards", points: 20 },
    { id: 18, text: "Do 10 squats", points: 20 },
    { id: 19, text: "Recite a tongue twister 3 times fast", points: 20 },
    { id: 20, text: "Balance a book on your head for 20 seconds while walking", points: 20 },
  ],
  hard: [
    { id: 21, text: "Do 20 push-ups without stopping", points: 30 },
    { id: 22, text: "Name 20 animals in 30 seconds", points: 30 },
    { id: 23, text: "Do the alphabet in sign language", points: 30 },
    { id: 24, text: "Hold a wall sit for 1 minute", points: 30 },
    { id: 25, text: "Do 30 jumping jacks, then 10 burpees", points: 30 },
    { id: 26, text: "Speak for 1 minute on a random topic without pausing", points: 30 },
    { id: 27, text: "Name all US states starting with 'M' in 20 seconds", points: 30 },
    { id: 28, text: "Do a handstand for 10 seconds", points: 30 },
    { id: 29, text: "Recite the first 10 digits of Pi", points: 30 },
    { id: 30, text: "Do 15 burpees without stopping", points: 30 },
  ],
};

export const getRandomChallenge = (difficulty) => {
  const challengeList = challenges[difficulty] || challenges.easy;
  const randomIndex = Math.floor(Math.random() * challengeList.length);
  return challengeList[randomIndex];
};
