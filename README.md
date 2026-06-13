# Convert Percentage To Grade

### Using a combination of arithmetic and comparison operators, write a program that calculates the grade of a student based on their percentage score.

Acceptance Criteria:

- The function should take one argument, which is a number representing the percentage score of a student.
- The function should return a string representing the corresponding letter grade based on the percentage score.
- If the percentage score is equal to or greater than 90, the function should return "A".
- If the percentage score is equal to or greater than 80 but less than 90, the function should return "B".
- If the percentage score is equal to or greater than 70 but less than 80, the function should return "C".
- If the percentage score is equal to or greater than 60 but less than 70, the function should return "D".
- If the percentage score is less than 60, the function should return "F".
  -The function should handle decimal percentage scores (e.g., 85.5) and round them to the nearest integer before determining the corresponding letter grade.
- The function should handle negative percentage scores (e.g., -10) and return "F" as the letter grade.
- The function should handle non-numeric input (e.g., a string) and return "F" as the letter grade.
