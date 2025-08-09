44
const quizQuestions = [

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },

  {
    question: "What is the correct way to write an IF statement in JavaScript?",
    options: ["if(i == 5) ", "if i == 5 then", "if i = 5", "if (i === 5) "],
    answer: "if(i === 5) "
  },

  {
    question: "Which operator is used for strict equality inJavaScript ? ",
    options: [" == ", "= ", " === ", " != "],
    answer: " === "
  },

  {
    question: "How do you declare function in JavaScript ? ",
    options: ["function myFunction()", "function: myFunction()", "function =myFunction()", "declare function myFunction()"],
    answer: "function myFunction()"

  },

  {
    question: "What does the 'typeof' operator return for an array in JavaScript? ",
    options: ["array", "object", "undefined", "number"],
    answer: "object"

  },


  {
    question: "Which method is used to add an element to the end of anarray ? ",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"

  },


  {

    question: "How do youcomment out a single line in JavaScript ? ",
    options: ["// This is a comment", "/* This is a comment * /", "# This is a comment", ""],
    answer: "/ / This is a comment"

  },


  {
    question: "What is the purpose ofthe 'querySelector()' method ? ",
    options: ["To select an element by its ID", "To select an element by its class", "To select the first element that matches a specified CSS selector", "To select all elements that match a specified CSS selector"],
    answer: "To select the first element that matches a specifiedCSS selector"

  },

  {

    question: "Which of the following is NOT a JavaScript data type ? ",
    options: ["String", "Boolean", "Float", "Undefined"],
    answer: "Float" // JavaScript has Number, which coversintegers and floats
  },



  {
    question: "What is an event listener in JavaScript?",
    options: ["A function that listens for changes in variable values", "A function that executes when a specific event occurs(e.g.  click, keypress)", "A method for debugging code", "A way to define new HTML elements"],
    answer: "A function that executes when a specific event occurs(e.g., click, keypress)"

  },


  {
    question: "What does `NaN` stand for in JavaScript ? ",
    options: ["Not a Number", "No Action Now", "Negative and Null", "New Array Notation"],
    answer: "Not a Number"
  },


  {

    question: "What is the difference between `let` and `const` ? ",
    options: ["`let` is block - scoped, `const` is function-scoped", "`let` can be reassigned, `const` cannot be reassigned", "`let` is global, `const` is local", "No practical difference"],
    answer: "`let` can be reassigned, `const` cannot be reassigned"

  },


  {

    question: "How do you convert a string to an integer in JavaScript ? ",
    options: ["parseInt()", "toFloat()", "toString()", "toFixed()"],
    answer: "parseInt()"

  },


  {
    question: "What is the purpose of the `return` statement in a function?",
    options: ["To stop the function execution immediately", "To specify the value returned by the function", "To declare a new variable", "Both A and B"],
    answer: "Both A and B"

  },


  {

    question: "Explain the concept of 'hoisting' in JavaScript.",
    options: ["Variables and functions are moved to the top of their scope before code execution.", "It's a way to lift elements in the DOM.", "It refers to the process ofcompiling JavaScript code.", "It's a security feature that prevents unauthorized access."],
    answer: "Variables and functions are functions are moved to the top of their scope before code execution."

  },


  {
    question: "How do you prevent default behavior of an event (e.g., form submission)?", options:
      ["event.stopDefault()", "event.cancel()", "event.preventDefault()", "event.stopPropagation()"], answer:
      "event.preventDefault()"
  },


  {
    question: "What is a callback function?",
    options: ["A function that calls itself recursively", "A function passed as an argument to another function, to be executed later", "A function that is only executed once", "A function that handles errors"],
    answer: "A function passed as an argument to another function, to be executed later"


  },


  {

    question: "How do you create a new array from an existing one, applying a transformation to each element ? ",
    options: ["`filter()`", "`reduce()`", "`map()`", "`forEach()`"],
    answer: "`map()`"
  },


  {
    question: "What is the use of `localStorage` in web development ? ",
    options: ["To store data temporarily for a single session", "To store data persistently in the browser with no expiration", "To send data to a server", "To manage cookies on the client side"],
    answer: "To store data persistently in the browser with no expiration"

  },


  {

    question: "What is the `this` keyword referring to in a regular function vs. an arrow function?",
    options: ["`this` is global in both", "In regular functions, `this` depends on how the function is called; in arrow functions, it's lexically bound.", "In regular functions, `this` is undefined; in arrow functions, it's the parent object.", "`this` always refers to the window object."],
    answer: "In regular functions, `this` depends on how the function is called; in arrow functions, it's lexically bound."

  },


  {

    question: "Which method would you use to remove the last element from an array ? ",
    options: ["shift()", "unshift()", "pop()", "splice()"],
    answer: "pop()"

  },


  {
    question: "What does the `JSON.parse()` method do?",
    options: ["Converts a JavaScript object to a JSON string.", "Converts a JSON string to a JavaScript object.", "Parses an XML document.", "Sends a JSON object to a server."], answer: "Converts a JSON string to a JavaScript object."
  }, {
    question: "How do you write a multi - line comment in JavaScript ? ", options:
      ["// This is a comment //", "/* This is a comment */", "# This is a comment #", ""],
    answer: "/* This is a comment */"

  },


  {

    question: "Which loop is best for iterating over the properties of an object?",
    options: ["for loop", "while loop", "for...of loop", "for...in loop"],
    answer: "for...in loop"

  },

  {

    question: "What is an immediately invoked function expression (IIFE)?",
    options: ["A function that is called by another function.", "A function that is declared but never executed.", "A function that executes as soon as it's defined.", "A function used for error handling."],
    answer: "A function that executes as soon as it's defined."

  },


  {

    question: "What is the primary use of `console.log()`?",
    options: ["To display pop - up messages to the user.", "To print messages or values to the browser's developer console for debugging.", "To include external JavaScript files.", "To handle user input from forms."],
    answer: "To print messages or values to the browser's developer console for debugging."

  },


  {

    question: "Which built -in method adds one or more elements to the beginning of an array ? ",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "unshift()"

  },


  {
    question: "What is the purpose of `setTimeout()`?",
    options: ["To execute a function repeatedly at specified intervals.", "To delay the execution of a function by a specified number of milliseconds.", "To immediately execute a function.", "To cancel a pending function execution."],
    answer: "To delay the execution of a function by a specified numberof milliseconds."

  },


  {
    question: "Which of the following is an example of an event handler property ? ",
    options: ["onClick", "handleEvent", "eventListener", "addEventListener"],
    answer: "onClick" // While addEventListener is preferred, onClick is an event handler property 


  },


  {

    question: "What does the `===` operator check for? ",
    options: ["Equality of value only.", "Equality of type only.", "Equality of both value and type.", "Assignment of value."],
    answer: "Equality of both value and type."

  },


  {

    question: "How do you access the first element of an array named `myArray`?",
    options: ["myArray[1]", "myArray.first", "myArray[0]", "myArray.getElement(0)"],
    answer: "myArray[0]"

  },


  {
    question: "What is the role of the DOM in web development ? ",
    options: ["To style HTML elements.", "To manage server side logic.", "To provide a programming interface for web documents.", "To handle network requests."],
    answer: "To provide a programming interface for web documents."

  },


  {

    question: "Which method is used to remove whitespace from both ends of a string ? ",
    options: ["trim()", "strip()", "clean()", "removeSpace()"],
    answer: "trim()"
  },

  {
    question: "What will `typeof null` return in JavaScript ? ",
    options: ["null", "object", "undefined", "number"],
    answer: "object" // This is a well-know historical bug in JavaScript

  },

]

export default quizQuestions;