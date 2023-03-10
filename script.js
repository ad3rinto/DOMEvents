var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li  = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListItemAfterClick (e){
	if(e.target.tagName == "LI"){
		console.log(e.target.innerText)

	}

};

function addDoneToList(e){
	e.target.classList.toggle("done")

}



li.forEach(function(liitem){
	liitem.addEventListener("click", addDoneToList)
});


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);