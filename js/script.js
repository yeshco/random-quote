var intervalID;

// This function selects a random quote from the quotes array:
// 1.It first generates a random number with the Math.random Function.
// 2.It returns an object passing the variable with the random number as the index number.
function getRandomQuotes() {
  iRandom = Math.floor(Math.random() * quotes.length);
  return quotes[iRandom];
};

// This second function changes the colors of the page randomly selected from an array
// 1. It generates a random number
// 2. It passes the number as an IndexValue to the array and stores the color value in a variable
// 3. It styles the HTML using the color value in the variable
function changeColor() {
  iRandom = Math.floor(Math.random() * arrayOfColors.length);
  i = arrayOfColors[iRandom];
  document.getElementById('body').style.backgroundColor = i;
  document.getElementById('loadQuote').style.backgroundColor = i;
}

// This third function changes the quotes automatically
// 1. Using the setInterval function we set an interval of 30 second to call the printQuote Function
function changeQuotesAuto() {
  intervalID = setInterval(printQuote, 30000);
}

//The Fourth function creates a string with HTML tags to be printed on the page it calls a function to change the color of the page
// 1. It assigns the Object from the first function to a variable.
// 2. It creates a second variable that holds the HTML tags and certain values of the object that is in the first variable.
// 3. It assigns the second variable to an HTML <div>
// 4. It empties the tagContainer <div>
// 5. It fills the tagContainer <div> with values from the tags key in each object using a loop
// 6. It calls the changeColor function
function printQuote() {
  i = getRandomQuotes();
  theWholeThing = '<p class="quote">' + i.quote;
  theWholeThing += '</p> <p class="source">' + i.source;
  if (i.citation != "") {theWholeThing += '<span class="citation">' + i.citation + '</span>'};
  if (i.year != ""){'<span class="year">' + i.year + '</span>'}
  theWholeThing += '</p>'
  document.getElementById('quote-box').innerHTML = theWholeThing
  document.getElementById('tagContainer').innerHTML = '<span></span>';
  for (o=0; o<i.tags.length; o++) {
    document.getElementById('tagContainer').innerHTML += '<span class="tags">' + i.tags[o] + '</span>';
  }
  changeColor();
  // This code clears the interval and starts a new interval again
  clearInterval(intervalID);
  changeQuotesAuto();
}

// This calls the printQuote function as soon as the page is loaded
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
