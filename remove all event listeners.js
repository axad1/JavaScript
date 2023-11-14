const elementBox = document.getElementById("element-box");
// add 2 event listeners
elementBox.addEventListener("click", function handleClick() {
  console.log("div element clicked first");
});
elementBox.addEventListener("click", function handleClick() {
  console.log("div element clicked second");
});

// Remove event listeners from Element
elementBox.replaceWith(elementBox.cloneNode(true));

/*
The cloneNode() method creates a copy of a node, and returns the clone.
The cloneNode() method clones all attributes and their values.
Set the deep parameter to true if you also want to clone descendants (children).
*/
