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
let isFive = function(input){
    if (typeof input == 5){
        return true;
    }else {
        return false;
    }
}