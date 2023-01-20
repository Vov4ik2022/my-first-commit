// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const arr = message.split(" ");
//     console.log(arr.length * pricePerWord);
// }


// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


function slugify(title) {
  // Change code below this line
  const arr = title.toLowerCase() + .join("-");
 
    console.log(arr);
  // Change code above this line
}

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");