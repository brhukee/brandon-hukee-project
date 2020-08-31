'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const bookEvents = require('./books/events')
// jQuery document.ready function https://api.jquery.com/ready/
//    the function passed to $() will only fire once the DOM is loaded
$(() => {
  // ALL event listeners must be set up inside document.ready (this) function!!!
  // attach an event listener for the 'click' event to the element with an id of get-all-books
  $('#get-all-books').on('click', bookEvents.handleGetAllBooks)
  $('#get-single-book').on('submit', bookEvents.handleGetSingleBook)
})
