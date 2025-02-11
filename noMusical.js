function noMusical(s, e, m, d) {
    if (m === 0) return e - s + 1;
    
    const musicalClasses = new Set();
    
    for (let X = s; X <= e + d - 1; X += m) {
      let startY = X - d + 1;
      if (startY < s) startY = s;
      let endY = X;
      if (endY > e) endY = e;
      
      for (let Y = startY; Y <= endY; Y++) {
        musicalClasses.add(Y);
      }
    }
    
    return (e - s + 1) - musicalClasses.size;
}