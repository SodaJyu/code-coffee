const makeWithinRange = (a, b) => {
    let result = [];
    let high;
    let low;
    if (a > b) {
      high = a;
      low = b;
    } else {
      high = b;
      low = a;
    }
    for (let i = low; i <= high; i++) {
      result.push(i);
    }
    return result;
  };