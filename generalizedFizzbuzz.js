const generalizedFizzBuzz = (n, f, b) => {
    let result = [];
    for (let i = 1; i <= n; i++){
      if (i % f === 0 && i % b === 0) {
        result.push("FizzBuzz");
      } else if (i % f === 0) {
        result.push("Fizz")
      } else if (i % b === 0) {
        result.push("Buzz")
      } else {
        result.push(i)
      }}
    return result;
  };