// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// Unit test for the sayHello function
// describe('sayHello', function() {
//     it('should be a defined function', function() {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', function() {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it('should return the string "Hello, Jane!" when executed', function() {
//         expect(sayHello("Jane")).toBe("Hello, Jane!");
//     });
//     it('should return the string "Hello, Alex!" when executed', function() {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });

// });
describe(
    'sayHello', function() {
        it('should be a defined function', function () {
            expect(typeof sayHello).toBe('function');
        });
        it('should return "Hello,(input)!', function () {
            expect(typeof sayHello()).toBe("string")
        });
        it('should return the string "Hello, Jane!" when executed',function(){
            expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
        it('should return the string "Hello, Alex!" when executed',function(){
            expect(sayHello("Alex")).toBe("Hello, Alex!");
        });
        it('should return the string "Hello, Pat!" when executed',function(){
            expect(sayHello("Pat")).toBe("Hello, Pat!");
        });
        it('should return the string "Hello, World!" when passed true boolean',function(){
            expect(sayHello(true)).toBe("Hello, World!");
        });
        it('should return the string "Hello, World!" when passed false boolean',function(){
            expect(sayHello(false)).toBe("Hello, World!");
        });
        it("should return 'Hello, World, World!' when input is undefined", function() {
            expect(sayHello()).toBe("Hello, World!");
        });

    });
//unit test for isFive function
describe(
    'isFive', function() {
        it('should be a defined function', function () {
            expect(typeof isFive).toBe('function');
        });
        it('should return a boolean for every input', function () {
            expect(typeof isFive()).toBe("boolean")
        });
        it('should return the boolean true when passed the number 5',function(){
            expect(typeof isFive(5)).toBe("boolean");
        });
        it('should return a boolean when when passed the string "5" ',function(){
            expect(typeof isFive("5")).toBe("boolean");
        });
    });