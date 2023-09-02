////////////////////////////////////////

console.log("Week 04 Coding Project!");


//Step 1

console.log("Step 1");

// "Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Part A - "Programmatically subtract the value of the first element in the array from the value in the last element of the array."

let lastElementIndex = ages.length - 1;
let result = ages[lastElementIndex] - ages[0];
console.log(result);

//Part B - "Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)."

ages.push(50);
console.log(ages);

//Part C - "Use a loop to iterate through the array and calculate the average age."

let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let average = sum / ages.length;

console.log(average);

//Step 2

console.log("Step 2");

// "Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'."

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Comment: Created an array with the elements listed.

//Part A - "Use a loop to iterate through the array and calculate the average number of letters per name."

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

//Comment: Created a "for" loop to calculate the number of letters in each name then divide by the number of names to get the average.

//Part B - "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces."

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i];
  if (i !== names.length - 1) {
    concatenatedNames += ' ';
  }
}

//Comment: Loop to link (concatenate) the names together with spaces between them.

console.log(concatenatedNames);

//Step 3

console.log("Step 3");

//"How do you access the last element of any array?"

let array = [1, 2, 3, 4, 5];

let lastElement = array[array.length - 1];

//Comment: By subtracting 1 from the array's length you get the last element.

console.log(lastElement);

//Step 4

console.log("Step 4");

//"How do you access the first element of any array?"

let firstElement = array[0];

//Comment: The first element is always 0 in the index.

console.log(firstElement);

//Step 5

console.log("Step 5");

//"Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

//Comment: Created an empty array "nameLengths" then used a "for" loop and used "push" to add the length of each name.

console.log(nameLengths);

//Step 6

console.log("Step 6");

//"Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array."

for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}

//Comment: Created a loop then calculated the sum of the elements.

console.log(sum);

//Step 7

console.log("Step 7");

//"Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')."

function concatenateWord(word, n) {
    return word.repeat(n);
  }

//Comment: Function that concatenates word and n.

  let word = 'Hello';
  let n = 3;
  let concatenated = concatenateWord(word, n);

//Comment: Using the let variables the word "Hello" repeats n (3) times when returning the function.

  console.log(concatenated);

//Step 8

console.log("Step 8");

//"Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space."

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }

//Comment: Created function which will return first/last with space between.

  let firstName = 'Quinn';
  let lastName = 'Wheatley';
  let fullName = getFullName(firstName, lastName);

//Comment: Create variables to print below.

  console.log(fullName); 

//Step 9

console.log("Step 9");

//"Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."

const numbers = [30, 35, 40];

function isSumGreaterThan100(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum > 100;
  }

//Comment: Created function/loop.

  result = isSumGreaterThan100(numbers);
  
  console.log(result);

//Step 10

console.log("Step 10");

//"Write a function that takes an array of numbers and returns the average of all the elements in the array."

  let nmbrs = [2, 18, 23, 93];

  function calculateAverage(nmbrs) {
    if (nmbrs.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < nmbrs.length; i++) {
      sum += nmbrs[i];
    }
    return sum / nmbrs.length;
  }

//Comments: Return divides the sum of the array with the length 136 / 4 = result.

  result = calculateAverage(nmbrs);
  
  console.log(result);

//Step 11

console.log("Step 11");

//"Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array."

function calcAvg(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length
}

function isAvgGreaterThan (arr1, arr2) {
  const avg1 = calcAvg(arr1);
  const avg2 = calcAvg(arr2);
  return avg1 > avg2;
}

const arr1 = [8, 6 , 4 , 2, 10];
const arr2 = [7, 5, 3, 1, 9];

res = isAvgGreaterThan(arr1, arr2);

console.log(res);

//Step 12

console.log("Step 12");

//"Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."

function willBuyDrink(isHotOutside, moneyInPocket) {

//Comment: Function with 2 Parameters.

  if (isHotOutside && moneyInPocket > 10.50) {
    return true;
  } else {
    return false;
  }

//Comment: Boolean true/false depending on whether or not both parameters are met.

}
const hotOutside = true;
const availMoney = 10.55;

const buyDrink = willBuyDrink(hotOutside, availMoney);

if (buyDrink) {
  console.log("Buy drink.");
} else {
  console.log("Don't buy.");
}

//Comment: If proves true will pring "Buy Drink." if not "Don't buy."

//Step 13

console.log("Step 13");

//"Create a function of your own that solves a problem. In comments, write what the function does and why you created it."

function willUseUmbrella(isRaining, haveUmbrella) {
  
    if (isRaining && haveUmbrella) {
      return true;
    } else {
      return false;
    }
  
  }
  const raining = false;
  const umbrella = true;
  
  const useUmbrella = willUseUmbrella(raining, umbrella);
  
  if (useUmbrella) {
    console.log("I'm using my umbrella today.");
  } else {
    console.log("I am not using my umbrella today.");
  }