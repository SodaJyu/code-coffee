const mergeLists = (arr1, arr2) => {
    const sorts = (a, b) => {
      return a-b
    }
    return arr1.concat(arr2).sort(sorts);
  };
// secret code A10BCB09