function getTimesFromMillis(millisSource) {
  const millis = millisSource % 1000;
  const secondsSource = parseInt((millisSource - millis) / 1000);
  const seconds = secondsSource % 60;
  const minutesSource = parseInt((secondsSource - seconds) / 60);
  const minutes = minutesSource % 60;
  const hoursSource = parseInt((minutesSource - minutes) / 60);
  const hours = hoursSource % 60;
  const daysSource = parseInt((hoursSource - hours) / 24);
  const days = daysSource % 24;

  return {
    millis,
    seconds,
    minutes,
    hours,
    days,
  };
}
