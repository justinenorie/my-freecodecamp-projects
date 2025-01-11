
/*
- This function calculates the value based on what value passed in the scores parameter.
- Initialize value in sum to store the upcoming values.
- For of loop, the score initial value holds the value of the scores from the parameter,
once it has a value it will proceed the logic below which is whatever the value of the scores
it will hold by the score and it will pass it in the logic below which is works for storing
the value from the sum.
- In short the for of loop it will add the value in sum, and the sum will store it.
- Now the logic completed storing all the value in the sum it will now calculate the 
total value of the sum and divided it by the length or how many scores hold the value.
- For example if the scores hold the value of [90, 89, 75] it means the length will be 3.
*/
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  } 
  /*
      - It will evaluate the scoreand return the result based on the value of score.
      - For example if the value of score in parameter is 89 it will return B
      because it is greater than to 80.
  */
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  /* 
      - This function is simple, this function will hold the value of score in parameter 
      and pass it to the return statement which calls the function of getGrade and holds the
      value of score, and the getGrade will convert the score into string which is based on the
      what score holds the parameter from hasPassingGrade, once it is converted into string
      it will compare it to the "F" which if it's not equal to F it will return True.
      So if it is Equal to "F" it will return False.
  */
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  /*
      - We combined all the functionalities which is inside of the function of studentMsg.
      - We are going to call all the three function and store it inside of the const 
      variable to use it. 
      - Average will return the total grade based on the totalScores value
      - Grade will return the string value based on the studentScore parameter
      - Passing will return to check if the string is equal to F or Not. It means it will
      return true or false.
      
      - The logic below will check if the passing will return true or false.
      - It will based the value of the passing which is if it is False it means the value of 
      getGrade function returns the F and the if statement will returns the value of failed.
      - And if the passing returns True it will proceed to else statement which is passed.
  */
  function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passing = hasPassingGrade(studentScore);
  
    if (passing === false){
      return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
    }else{
      return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
    }
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([92, 89, 23, 78, 90, 100, 67, 38, 97, 89], 80));
  