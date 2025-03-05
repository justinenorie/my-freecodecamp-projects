const poll = new Map();

const addOption = (option) => {
  if (!option) {
    return "Option cannot be empty.";
  }
  
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
};

console.log(addOption("Egypt"));
console.log(addOption("Malaysia"));
console.log(addOption("Turkey"));

const vote = (option, voterId) => {
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }

  if(poll.has(option)){
    const voters = poll.get(option);
    if(voters.has(voterId)){
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      voters.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
};

console.log(vote("Egypt", "traveler1"));
console.log(vote("Egypt", "traveler2"));
console.log(vote("Malaysia", "traveler3"));

console.log(poll);

const displayResults = () => {
  let results = "Poll Results:\n";
  poll.forEach((voters, option) => {
    const count = voters.size;
    results += `${option}: ${count} votes\n`;
  });
  return results.trim();
};

console.log(displayResults());