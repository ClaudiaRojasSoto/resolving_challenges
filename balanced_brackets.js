function balancedBrackets(string) {
    const stack = [];
    const pairs = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let i = 0; i < string.length; i++) {
      if (pairs[string[i]]) {
        stack.push(string[i]);
      } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
        if (pairs[stack.pop()] !== string[i]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(balancedBrackets('(hello)[world]'))
  // => true
  
  console.log(balancedBrackets('([)]'))
  // => false
  
  console.log(balancedBrackets('[({}{}{})([])]'))
  // => true
