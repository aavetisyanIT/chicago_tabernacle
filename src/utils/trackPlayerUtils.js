//Build timestamp
const timeFormat = duration => {
  var date = new Date(duration * 1000);
  var hh = date.getUTCHours();
  var mm = date.getUTCMinutes();
  var ss = date.getSeconds();

  // Ensure there are two-digits
  if (hh < 10) hh = '0' + hh;
  if (mm < 10) mm = '0' + mm;
  if (ss < 10) ss = '0' + ss;

  let timeStamp = '';
  if (hh !== 0) {
    // Format HH:MM:SS
    timeStamp = hh + ':' + mm + ':' + ss;
  }
  // Format MM:SS
  timeStamp = mm + ':' + ss;
  return timeStamp;
};

export default timeFormat;
