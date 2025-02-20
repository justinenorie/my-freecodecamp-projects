const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

const formatDateMMDDYYYY = (date) => {
  const format = date.toLocaleDateString();

  return `Formatted Date (MM/DD/YYYY): ${format}`
}

console.log(formatDateMMDDYYYY(currentDate));

const formatDateLong = (date) => {
  const option = { month: 'long', day: 'numeric', year: 'numeric' }
  const format = date.toLocaleDateString('en-US', option);

  return `Formatted Date (Month Day, Year): ${format}`
}

console.log(formatDateLong(currentDate));