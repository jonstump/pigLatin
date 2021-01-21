$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const input = $('input#piglatin').val();
    const plArray = input.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];

    function checkYConsonant(array) {
      for (let i = 0; i < array.length; i++) {
        if ((array[i][0]).toLowerCase() === 'y') {
          const words = array[i];
          const transformedWord = words.replace(words[0], "");
          const result = transformedWord + "yay";
          console.log(result);
        }
      }
    }
    checkYConsonant(plArray);

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






  });
});