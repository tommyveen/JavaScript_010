// // const scream = function () {
// //     console.log("Aaaaaaa!");
// //   };
  
// //   // Calling scream outside of a function
// //   scream();
  
// //   // Here we call scream inside of a function
// //   const makeNoise = function () {
// //     scream();
// //   };
  
// //   makeNoise();

// //   const add = function(numberA, numberB) {
// //     return numberA + numberB;
// // };

// // // The add function returns to this line, which is outside of a function.
// // const eight = add(3, 5);
// // console.log(eight);

// // const doCalculation = function() {
// //     // The add function returns to this line, which is inside of a function.
// //     const six = add(2, 4);
// //     console.log(six);
// // };

// // doCalculation();

// // const makePositive = function(number) {
// //     console.log("Entering makePositive..");
// //     if (number < 0) {
// //         return Math.abs(number);
// //     }
// //     return number;
// // };

// // const makeBigger = function(number) {
// //     console.log("Entering makeBigger..");
// //     if (number < 10) {
// //         return 10 + number;
// //     }
// //     return number;
// // };

// // const square = function(number) {
// //     console.log("Entering square..");
// //     return number * number;
// // };

// // const doComplexCalculation = function(number) {
// //     console.log("Entering doComplexCalculation..");
// //     const positiveNumber = makePositive(number);
// //     const bigNumber = makeBigger(positiveNumber);
// //     const squaredNumber = square(bigNumber);
// //     return squaredNumber;
// // };

// // console.log(doComplexCalculation(-1));




// const checkAge = function(number) {

//     console.log("Entering age-check..")

//     if (number >= 18) {
//         return true;
//     } 
//     return false;
// };

// const greetMessage = function (number) {

//     console.log("Entering greetMessage..")

//     const adult = checkAge(number);

//     if (adult == true) {
//         return "Hey there";
//     } else {
//         return "Hey kiddo";
//     };
// };

// console.log(greetMessage(13))




// const price = function (basePrice, vatPrcnt) {

//     // console.log("Total price..")

//     return basePrice * vatPrcnt;
// }

// // console.log(price(1000, 1.21));

// const vatAmount = function (basePrice, vatPrcnt) {

//     console.log("Vat amount..")
    
//     const vat = price(909, 1.21);

//     return vat * 0.21;
// }

// console.log(vatAmount())


const price = function (basePrice, vatPrcnt) {

    // console.log("Total price..")

    return basePrice * vatPrcnt;
}

// console.log(price(1000, 1.21));

const vatAmount = function (basePrice, vatPrcnt) {

    console.log("Vat amount..")
    
    const vat = price(909, 1.21);

    return vat * 0.21;
}

console.log(vatAmount())





