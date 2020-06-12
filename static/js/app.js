// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");


// Step 1: Loop Through `data` and console.log each UFO sighting objec
tableData.forEach(function(ufoSighting) {
console.log(ufoSighting);
});

// Step 2:  Use d3 to append one table row `tr` for each UFO sighting objec
//tableData.forEach(function(ufoSighting) {
//console.log(ufoSighting);
//var row = tbody.append("tr");
//});

//Step 3:  Use `Object.entries` to console.log each UFO sighting value
//tableData.forEach(function(ufoSighting) {
//console.log(ufoSighting);
//var row = tbody.append("tr");
//Object.entries(ufoSighting).forEach(function([key, value]) {
//console.log(key, value);
//});
//});

// Step 4: Use d3 to append 1 cell per UFO sighting value (datetime, city, state, country, shape, duration, comments)
// tableData.forEach(function(ufoSighting) {
// console.log(ufoSighting);
// var row = tbody.append("tr");
// Object.entries(ufoSighting).forEach(function([key, value]) {
// console.log(key, value);
// //Append a cell to the row for each value in the UFO sighting object
// var cell = row.append("td");
// });
// });

// Step 5: Use d3 to update each cell's text with
// tableData.forEach(function(ufoSighting) {
// console.log(ufoSighting);
// var row = tbody.append("tr");
// Object.entries(ufoSighting).forEach(function([key, value]) {
// console.log(key, value);
// //Append a cell to the row for each value in the UFO sighting object
// var cell = row.append("td");
// cell.text(value);
// });
// });

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((ufoSighting) => {
   var row = tbody.append("tr");
   Object.entries(ufoSighting).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);

var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
console.log(filteredData);

};
