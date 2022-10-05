const fetchWeekday = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const newDate = new Date();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const day = newDate.getDay();

  return `${dayNames[day]} ${monthNames[month]} ${date}`;
}

export default fetchWeekday;