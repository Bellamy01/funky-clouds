export function getDayFromTimestamp(timestamp) {
  // Convert timestamp to milliseconds
  const dateInMilliseconds = timestamp * 1000

  // Create a Date object from the milliseconds
  const date = new Date(dateInMilliseconds)

  // Get the day of the week (0-6, where 0 is Sunday)
  const day = date.getDay()

  //Get the full day name
  const fullDayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][day];

  // Slice the first three letters
  return fullDayName.slice(0,3);
}