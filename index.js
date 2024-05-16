/**
 * Calculates estimated period based on average cycle length and last period date
 * @param {number} cycleLength Average cycle length in days (number)
 * @param {Date} lastPeriod Last period start date (Date object)
 * @returns {Promise<object>} An object with estimated period start and end dates
 */
function calculatePeriod(cycleLength, lastPeriod) {
    if (typeof cycleLength !== 'number' || cycleLength <= 0) {
      throw new Error('cycleLength must be a positive number');
    }
  
    if (!(lastPeriod instanceof Date)) {
      throw new Error('lastPeriod must be a valid Date object');
    }
  
    // Estimated period start date (add cycle length to last period)
    const periodStart = new Date(lastPeriod.getTime() + cycleLength * 24 * 60 * 60 * 1000);
  
    // Estimated period end date (assume period lasts 5 days)
    const periodEnd = new Date(periodStart.getTime() + 5 * 24 * 60 * 60 * 1000);
  
    return {
      periodStart: periodStart.toISOString(),
      periodEnd: periodEnd.toISOString(),
    };
  }
  
  // Example usage
  const cycleLength = 28; // Replace with average cycle length
  const lastPeriod = new Date(2024, 4, 1); // May 1st, 2024 (replace with actual date)
  
  calculatePeriod(cycleLength, lastPeriod)
    .then((periodData) => {
      console.log('Estimated Period Start:', periodData.periodStart);
      console.log('Estimated Period End:', periodData.periodEnd);
    })
    .catch((error) => console.error(error));
  