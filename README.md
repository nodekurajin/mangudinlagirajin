# Women's Menstruation Cycle Calculator

## Explanation:

- The `calculatePeriod` function takes `cycleLength` (average cycle in days) and `lastPeriod` (date object) as arguments.
- It validates the input data types (number for `cycleLength` and Date object for `lastPeriod`).
- It calculates the estimated period start date by adding the cycleLength in days to the lastPeriod date.
- It assumes a typical period duration of 5 days and calculates the estimated end date.
- The function returns an object with `periodStart` and `periodEnd` in ISO 8601 format.
- The example usage demonstrates calling the function with sample values.
- It logs the estimated period start and end dates.

## Important Notes:

- This is a simplified calculation and individual cycle lengths can vary significantly.
- Factors like stress, illness, and hormonal changes can affect menstruation cycles.
- This function should not be used for medical diagnosis or birth control purposes.
- It's recommended to consult a healthcare professional for personalized cycle tracking and guidance.