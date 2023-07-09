// Some code that updates the page:
function UpdatePage(idStatePairs) {
	console.log("Updating page")
	idStatePairs.forEach(([id, state]) => {
		let element = document.getElementById(id)
		element.innerText = state
	});
}
