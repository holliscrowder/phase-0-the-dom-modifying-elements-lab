// Write your code here!
// remove main //
const main = document.getElementById("main");
main.remove();

// create new header variable 'h1' //
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Hollis is the champion";
document.head.append(newHeader);