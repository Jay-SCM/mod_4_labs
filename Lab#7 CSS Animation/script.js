const slider = document.getElementById("slider");
const slider2 = document.getElementById("slider2");
let shape = 0; // 0: square, 1: circle, 2: triangle, 3: star
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];}  // Generate a random color
    return color;}
function slideAndChangeShape(element) {
    if (element.style.top === "0px") {
        element.style.top = "100vh";
        const randomColor = getRandomColor();
        element.style.backgroundColor = randomColor; // Change to a random color
        if (shape === 0) {
            element.style.borderRadius = "50%"; // Change to a circle
            shape = 1;
        } else if (shape === 1) {
            element.style.borderRadius = "0%"; // rectangle
            shape = 2;
        } else if (shape === 2) {
            element.style.borderRadius = "50%"; // Change to a star
            element.classList.add("star");
            shape = 3;
        } else {
            element.style.borderRadius = "0%"; // Change back to a square
            element.classList.remove("star");
            shape = 0;}
    } else {
        element.style.top = "0px";}  // Slide back to the top
}
setInterval(() => slideAndChangeShape(slider), 2000); // Change slide and shape every 2 seconds
setInterval(() => slideAndChangeShape(slider2), 2000); // Change slide and shape every 2 seconds for the second slider
