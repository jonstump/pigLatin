$(document).ready(function() {
  
  let words = [];
  const vowels = ["a", "e", "i", "o", "u"];

  function vowelCheck(array){
    for (const element of vowels){
      for (let i = 0; i < array.length; i++){
        if (array[i][0] === element) {
          const word = array[i];
          console.log(word);
          words.push(word + "way"); 
          console.log(words);
      }
    }
  }
}
  
  
  
  // User logic
  $('form').submit(function(e) {
    e.preventDefault();
    const input = $('input#piglatin').val();
    const plArray = input.split(" ");
    console.log(plArray);


    function pigLatin(plArray){
      vowelCheck(plArray);
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
