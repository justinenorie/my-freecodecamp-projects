//This array stores 5 objects containing questions data.
const questions = [
    {
      category: "History",
      question: "What was the first successful English settlement in North America?",
      choices: ["Plymouth", "Jamestown", "Salem"],
      answer: "Jamestown"
    },
    {
      category: "Science",
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Saturn", "Jupiter"],
      answer: "Jupiter"
    },
    {
      category: "Literature",
      question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
      choices: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen"],
      answer: "Harper Lee"
    },
    {
      category: "Music",
      question: "Which British rock band, formed in 1960, is known for hits like 'I Want to Hold Your Hand' and 'Yesterday'?",
      choices: ["The Rolling Stones", "The Who", "The Beatles"],
      answer: "The Beatles"
    },
    {
      category: "Geography",
      question: "What is the world's largest desert?",
      choices: ["The Sahara", "The Gobi", "The Mojave"],
      answer: "The Sahara"
    },
  ];
  
  const getRandomQuestion = () => {
    const random = Math.floor(Math.random() * questions.length);
    return questions[random];
  }
  
  const getRandomComputerChoice = (choices) => {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }
  
  const getResults = (question, computerChoice) => {
    const correctAnswer = question.answer;
    return computerChoice === correctAnswer 
      ? `The computer's choice is correct!` 
      : `The computer's choice is wrong. The correct answer is: ${correctAnswer}`;
  }
  
  const randomQuestion = getRandomQuestion();
  const computerChoice = getRandomComputerChoice(randomQuestion.choices);
  
  console.log(`Question: ${randomQuestion.question}`)
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(getResults(randomQuestion, computerChoice));