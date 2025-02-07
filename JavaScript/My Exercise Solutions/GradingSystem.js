const getAverage = (test) => {
    let sum = 0;
  
    test.forEach((e) => {
      sum += e;
    })
  
    return sum / test.length;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
  console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
  
  const getGrade = (score) => {
    if (score === 100) {
      return "A+"
    }
    else if (score >= 90 && score <= 99) {
      return "A"
    }
    else if (score >= 80 && score <= 89) {
      return "B"
    }
    else if (score >= 70 && score <= 79) {
      return "C"
    }
    else if (score >= 60 && score <= 79) {
      return "D"
    }
    else {
      return "F"
    }
  }
  
  console.log(getGrade(71.7));
  
  const hasPassingGrade = (score) => {
    return getGrade(score) !== "F";
  }
  
  console.log(hasPassingGrade(65));
  
  const studentMsg = (score, anotherScore) => {
  
    if(hasPassingGrade(anotherScore)){
      return `Class average: ${getAverage(score)}. Your grade: ${getGrade(anotherScore)}. You passed the course.`
    }
    else{
      return `Class average: ${getAverage(score)}. Your grade: ${getGrade(anotherScore)}. You failed the course.`
    }
  
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));