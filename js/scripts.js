$(document).ready(function() {
  
  let words = [];
  const vowels = ["a", "e", "i", "o", "u"];

    function vowelCheck(array){
      for (const element of vowels){
        for (let i = 0; i < array.length; i++){
          if (array[i][0].toLowerCase() === element) {
            const word = array[i];
            words.push(word + "way"); 
            console.log(words + "This is vowels");
        }
      }
    }
  }

    function yCheck(array) {
      for (let i = 0; i < array.length; i++){
        if ((array[i][0]).toLowerCase() === 'y') {
          const word = array[i];
          words.push(word.substring(1) + "yay"); 
          console.log(words + "This is y");
      }
    }
  }

  function quCheck(array) {
    for (let i = 0; i < array.length; i++){
      const word = array[i];
      const firstLetters = word.substring(0,2);
      if (firstLetters.toLowerCase() === 'qu') {
        words.push(word.substring(2) + "quay"); 
        console.log(words + "This is qu");
      }
    }
  }

  function consonantCheck(array){
    for (const element of vowels){
      for (let i = 0; i < array.length; i++){
        const word = array[i];
        const firstLetters = word.substring(0,2).toLowerCase();
        const firstLetter = firstLetters.substring(0,1);
        const secondLetter = firstLetters.substring(1,2);
        if (firstLetters !== element && "qu"){
          if(firstLetter !== element && 'y'){
            console.log(element)
            if(secondLetter === element){
              words.push(word.substring(1) + firstLetter + 'ay');
              console.log(words);
            } else {
              words.push(word.substring(2) + firstLetters + 'ay'); 
              console.log(words + " This is cononants");
            }
          }
        }
      }
      break;
    }
  }


    //function consonantCheck(array){
      //for (const element of vowels){
        //for (let i = 0; i < array.length; i++){
         // if (array[i][0].toLowerCase() !== element) {
            //const word = array[i];
            //words.push(word + ""); 
            //console.log(words + "this is consonants");
        //}
      //}
    //}
  //}

  
  
  
  // User logic
  $('form').submit(function(e) {
    e.preventDefault();
    const input = $('input#piglatin').val();
    const plArray = input.split(" ");
    console.log(plArray);


    function pigLatin(plArray){
      vowelCheck(plArray);
      yCheck(plArray);
      quCheck(plArray);
      consonantCheck(plArray);
    }

    pigLatin(plArray);
  });
});

    //   const slicedLetter = array.slice(0, 1).toString().toLowerCase();
    //   array.push(slicedLetter);
    //   array.shift();
    //   const transformedString = array.slice().join("");
    //   result = transformedString + "ay";
    //   console.log(result);
    // }

    // function pigLatin(plArray){}
    // if (plArray[0] === "y") {
    //   const newArray = input.slice(0, 1);
    //   result = (input.append(newArray)).join() + "ay";

    //   const result = pigLatin(plArray);
    // }

    // plArray.forEach(function(beginning) {
    //   if (beginning.slice(0)) === vowels {
    //     beginning.concat("way");
    //   };
    // });
