var fibGenerator = function*() {
      let current = 0; 
  let next = 1;

  while (true) {
    yield current; 

    [current, next] = [next, current + next];

  }
};
