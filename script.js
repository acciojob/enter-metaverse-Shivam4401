//your JS code here. If required.
let text = document.querySelector("#status");
let btn = document.querySelector("#enterBtn");
function changeP () {
	text.innerHTML = "<h1>Enter the Metaverse</h1>"
}
btn.addEventListener("click",changeP);
