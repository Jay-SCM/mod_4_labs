const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
console.log(actions);
console.log(ans);
let expression = '';
function calculateSquare() { // This function calculates the square of the expression
    if (expression === '') { // If the expression is empty,
        return 0;}
    const value = parseFloat(expression); // convert the expression to a float
    return value * value;}
actions.addEventListener('click', (e) => {
    console.log(e.target);
    const value = e.target.dataset['value']; // Get the clicked element's value
    if (value !== undefined) {
        if (value === 'ce') { // If the value is 'ce', clear the expression
            expression = '';
            ans.value = 0;
        } else if (value === 'x^2') {
            expression = calculateSquare().toString();
        } else if (value === 'radic') {
            expression = Math.sqrt(parseFloat(expression)).toString(); // If the value is 'radic', calculate the square root of the expression
        } else if (value === 'log') { // If the value is 'log', calculate the log of the expression
            //bunch of trig funcs
            expression = Math.log(parseFloat(expression)).toString(); // If the value is 'log', calculate the log of the expression
        } else if (value === 'sin') {
            expression = Math.sin(parseFloat(expression)).toString(); // If the value is 'sin', calculate the sine of the expression
        } else if (value === 'cos') {
            expression = Math.cos(parseFloat(expression)).toString(); // If the value is 'cos', calculate the cosine of the expression
        } else if (value === 'tan') {
            expression = Math.tan(parseFloat(expression)).toString(); // If the value is 'tan', calculate the tangent of the expression
        } else if (value === '=') {
            expression = eval(expression).toString(); // If the value is '=', evaluate the expression
        } else {expression += value;}
        if (expression === undefined) { // If the expression is undefined, set it to an empty string
            expression = '';
            ans.value = 0; // Set the calculator display to 0
        } else {ans.value = expression;} // Otherwise, set the expression to the evaluated value
    }
});