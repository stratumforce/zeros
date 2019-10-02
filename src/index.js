module.exports = function zeros(expression) {
  // Get all factorials
  const factorials = [...expression.matchAll(/([\d\!]+)/g)];

  let twos = 0;
  let fives = 0;

  factorials.forEach(factorial => {
    // Get the number
    let num = factorial[0].match(/([\d]+)/g)[0];
    // Get the step: 1 for regular factorial and 2 for double factorial
    let step = factorial[0].includes("!!") ? 2 : 1;

    // Count the twos and fives
    while (num >= 2) {
      // Count fives
      // Each number that equals to power of five
      // gives plus one fives for each power of five
      // that it's equals to
      let divisor = 5;
      while (divisor <= num) {
        if (num % divisor === 0) fives++;
        divisor *= 5;
      }

      // Count twos
      if (num % 2 === 0) twos++;
      // Decrease num
      num -= step;
    }
  });

  // Return smallest number
  return twos > fives ? fives : twos;
};
