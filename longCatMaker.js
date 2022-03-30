const longCatMaker = (n) => {
  
    let result = ["Long", "cat", "is"];
    
    let long = "l";
    
    for (let i = 0; i < n; i++) {
      long += "o";
    }
    result.push(long += "ng!")
    
   
    return result.join(' ')
  };
//secret code BA67C33C
