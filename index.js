// Create a new Date object with the current date and time
const currentDate = new Date();

// Get the current date in various formats
const year = currentDate.getFullYear(); // 4-digit year
const month = currentDate.getMonth() + 1; // Month (0-11, so add 1 for the actual month)
const day = currentDate.getDate(); // Day of the month

console.log(`Current Date: ${year}-${month}-${day}`);
