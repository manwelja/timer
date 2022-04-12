const { argv } = process;
//get the user input timer intervals and convert them to seconds
const timers = argv.slice(2).map(x => x * 1000);

//Loop through the intervals and output a beep at the specified interval time
timers.forEach((interval) => {
  //Only beep when the interval is a number greater than 0
  if (interval >= 0 && typeof interval === 'number') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval);
  }
});