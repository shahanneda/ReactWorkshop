// Our Logic:
let buttonElement = document.getElementById("button")
let counter = 0
button.addEventListener("click", function () {
	counter += 1
})

let timer = 0;
setInterval(() => {
	timer += 1
}, 1000)


// Call a function from our library, telling what the state and corresponding elements are
setInterval(() => {
	UpdatePage([["counter-container", counter], ["timer-container", timer]])
}, 10)