function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (word === element) {
        wordCount++
      }
    });
    return wordCount;
  }

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (word.toLowerCase() === element.toLowerCase()) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function noBadWords(text) {
    let answer = [];
    wordArray = text.split(" ");
    wordArray.forEach(word => {
        if (word.toLowerCase() === "zoinks" || word.toLowerCase() === "muppeteer" || word.toLowerCase() === "biffaroni"){
            console.log(`Naughty word detected: ${word}`);
        } else {
            answer.push(word);
        }

    })
    return console.log(answer.join(" "));  
  };


  noBadWords("this is a sentence with a naughty word that being zoinks and muppeteer and biffaroni");