const makeRange = (n) => {
    let result = [];
    if (n < 0) {
      return [];
    }
    for ( i = 1; i <= n; i++){
      result.push(i);
    };
    return result;
  };
  