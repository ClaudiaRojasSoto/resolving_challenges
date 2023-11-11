var maximumNumberOfStringPairs = function(words) {
       let count = 0;
    for(let i = 0;i<words.length;i++){
        let word = words[i];
        if(words.filter(el=>el!=word && el!='').includes(word.split('').reverse().join(''))){
              count++;
              words[i] = ''
        }
    }
    return count;
};
