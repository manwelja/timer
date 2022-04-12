const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const recursiveAsyncRead = function () {
  rl.question("Timer beep?  ", function(answer) {
    //if b, beepo right away
    if (answer === 'b') {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 0);
      //re-loop
      recursiveAsyncRead();
    }
    //if number, delay beep for 1 =- 9 seconds accordingly
    if (Number(answer) >= 1 || Number(answer) <= 9) {
      console.log(`setting timer for ${answer} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(answer) * 1000);
      //re-loop
      recursiveAsyncRead();
    }
  });
};
//if CTRL+C, bye bye
rl.on('SIGINT', () => {
  rl.close();
  console.log("\nThanks for using me, ciao!");
});

recursiveAsyncRead();
