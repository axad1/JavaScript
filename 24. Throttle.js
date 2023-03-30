// https://www.syncfusion.com/blogs/post/javascript-debounce-vs-throttle.aspx#:~:text=Debounce%20is%20most%20suitable%20for,events%20like%20resizing%20and%20scrolling.

var searchBarDom = document.getElementById('search-bar');
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;

const getSearchResult = throttle(() => {
  numberOfApiCalls += 1;
  console.log('Number of API Calls : ' + numberOfApiCalls);
}, 1000);

searchBarDom.addEventListener('input', function (e) {
  numberOfKeyPresses += 1;
  console.log('Search Keyword : ' + e.target.value);
  console.log('Number of Key Presses : ' + numberOfKeyPresses);
  getSearchResult();
});


function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}