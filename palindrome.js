function isPalindrome (str) {
    const cleanString = str.replace(/[\W_]/g,'').toLowerCase();
    const reverseString = cleanString.split('').reverse().join('');
    return cleanString === reverseString;
  }
