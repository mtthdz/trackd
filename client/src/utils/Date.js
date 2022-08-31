const fetchToday = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const newDate = new Date();
  const month = newDate.getMonth();
  const date = newDate.getDate();

  return `${monthNames[month]} ${date}`;
}

export default fetchToday;