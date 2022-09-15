// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
let sayHello = function(input) {
    if (typeof input === "boolean" || input === undefined) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}