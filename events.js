var articleSection = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var keypressInput = document.getElementById("keypress-input");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
function printSection(event){
	var currentText = event.target.innerHTML;
	outputTarget.innerHTML += `<div>You clicked on the ${currentText} section</div>`;
}
for (var i = 0; i < articleSection.length; i++) {
	var aS = document.getElementsByClassName("article-section");
	aS[i].addEventListener("click", printSection);
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
function printTitle(){
	outputTarget.innerHTML += `<div>"You moved your mouse inside the ${pageTitle.innerHTML}"`;
}
function printTitleOut(){
	outputTarget.innerHTML += `<div>"You left the ${pageTitle.innerHTML}!!"`;
}
var pageTitleEvent = pageTitle.addEventListener("mouseover", printTitle);
var pageTitleEvent = pageTitle.addEventListener("mouseout", printTitleOut);

// When you type characters into the input field, the output element should mirror the text in the input field.
function keypressInputText(){
	var inputText = keypressInput.value;
	outputTarget.innerHTML += `<div>You typed: "${inputText}" into the text area :)</div>`
}
function enterKeyPressed(keypress){
	if (keypress.which === 13) {
		keypressInputText();
		keypressInput.value = "";
	}
}
document.addEventListener("keypress", enterKeyPressed);

// You'll be using element.classList to manipulate the CSS classes on elements.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var colorButton = document.getElementById("add-color");
var largeButton = document.getElementById("make-large");
var borderButton = document.getElementById("add-border");
var roundButton = document.getElementById("add-rounding");
var guineaPigText = document.getElementById("guinea-pig");

function guineaPigColor(){
	guineaPigText.classList.add("color");
	guineaPigText.style.color = "blue";
}
function guineaPigLarge(){
	guineaPigText.classList.add("large");
	guineaPigText.style.fontSize = "2em";
}
function guineaPigBorder(){
	guineaPigText.classList.add("border");
	guineaPigText.style.border = "1px solid black";
}
function guineaPigRound(){
	guineaPigText.classList.add("round");
	guineaPigText.style.borderRadius = "25px";
}

colorButton.addEventListener("click", guineaPigColor);
largeButton.addEventListener("click", guineaPigLarge);
borderButton.addEventListener("click", guineaPigBorder);
roundButton.addEventListener("click", guineaPigRound);