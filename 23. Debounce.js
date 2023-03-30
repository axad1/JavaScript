"use strict"
var searchBarDom = document.getElementById('search-bar');
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;

const getSearchResult = debounce(() => {
  numberOfApiCalls += 1;
  console.log('Number of API Calls : ' + numberOfApiCalls);
}, 2000);

searchBarDom.addEventListener('input', function (e) {
  numberOfKeyPresses += 1;
  console.log('Search Keyword : ' + e.target.value);
  console.log('Number of Key Presses : ' + numberOfKeyPresses);
  getSearchResult();
});

function debounce(callback, delay = 1000) {
  var time;
  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}