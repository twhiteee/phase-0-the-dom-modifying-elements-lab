// Write your code here
document.getElementById("main").remove();
const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.id = "victory"
newHeader.textContent = "Tristan is the champion"