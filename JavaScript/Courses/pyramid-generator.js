const character = "!";
const count = 10; //Initial value of the number of rows
const rows = []; //Storing the rows for the pyramid
let inverted = false; //If it's true it will invert the pyramid

/*First explaination of this function is to store the value 
of rows and count in the parameter of rowNumber and rowCount

Once it is stored it will now have a value inside of the parameter
based on the for loop values.

So it means the rowCount has a value of 8 and the inital value of
rowNumber is 1 so it will be the first one will be executed.

" ".repeat(rowCount - rowNumber)
Now we have the value of rowCount and rowNumber.
the repeat means it will repeat the string value based on the inside
of the parenthesis value, in our case the rowCount is 8 and the rowNumber is 1
so it means it will have a value of 7 because of the minus 8-1 = 7.

character.repeat(2 * rowNumber - 1)
This will display the character variable value which is the #
We also use the character.repeat based on the value inside of the parenthesis
which is in the first loop the value of rowNumber is 1 it means it will do the
2 * 1(rowNumber value) - 1 = 1 so it will display only 1 # so in the next row it will do the same thing which is
2 * 2 - 1 = 3 so it will display 3 #.

" ".repeat(rowCount - rowNumber)
same function as the first to keep the balance of the pyramid.

 */
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/* 
	Let's start with the for Loop assigning the inital value, conditions and the updation of the initial value.
	It will continuesly do the loop and update the value of i and it will stop based on the
	value of the count which is 8.

	Each loop will pass the value in padRow functions, based on the condition statement.
	Let say the inverted is false and it will do the function in rows.push.
	It means it will add the rows array value from the end of position in array value.
	
	And if the inverted is true it will add the array value from the end value in start
	position of the array.
	
	Each loop will pass the value in the parameter of the function of padRow.
	Let's take an example of the first loop.
	The padRow function will pass the i value which is 1 and the count value which is 8.
	So it means it will do the function based on the value passed by the for loop. 
	And it will continue to loop until the i reached the 8 value that assigned to count
	this will stopped and end the program with the result.
*/
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*
	The result here will store the value of the row based on the rows array.
	The inside of the for of function is we initially assign the value of rows in row.
	It means whatever the value inside of the rows is it will assigned it in the row.
	
	Since now we have a value of row it will do the loop based on the arrays value of the rows.
	The first loop will be result = result + "\n" + "       #       ". And it will store inside of the 
	result variable and it will continue the loop until all the rows array value is stored inside of the
	result variable and Printed it out using the console.log and call the value stored 
	inside of the result.
*/
let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);