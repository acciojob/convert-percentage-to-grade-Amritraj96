function calculateGrade(percentage) {
  // 1. Handle non-numeric input
  if (typeof percentage !== 'number' || isNaN(percentage)) {
    return 'F';
  }

  // 2. Round the decimal percentage score to the nearest integer
  const roundedPercentage = Math.round(percentage);

  // 3. Handle negative percentages and scores below 60
  if (roundedPercentage < 60) {
    return 'F';
  } else if (roundedPercentage >= 60 && roundedPercentage <= 69) {
    return 'D';
  } else if (roundedPercentage >= 70 && roundedPercentage <= 79) {
    return 'C';
  } else if (roundedPercentage >= 80 && roundedPercentage <= 89) {
    return 'B';
  } else if (roundedPercentage >= 90) {
    return 'A';
  }
}

// Prompt and alert logic provided in your starter code
const input = prompt("Enter Percentage.");
// Using parseFloat instead of parseInt to safely pass decimals into the function
const percentage = parseFloat(input); 
alert(calculateGrade(percentage));