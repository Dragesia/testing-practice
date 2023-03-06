import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from "./functions.js";

test("Capitalize", () => {
    expect(capitalize("all lower with one Upper")).toBe("All lower with one Upper");
});

test("Reverse String", () => {
    expect(reverseString("Lorem, ipsum dolor sit amet x 11 times!")).toBe("!semit 11 x tema tis rolod muspi ,meroL");
});

test("Adding: 4 + 2 = 6", () => {
    expect(calculator.add(4, 2)).toBe(6);
});

test("Substracting: 3 - 5 = -2", () => {
    expect(calculator.subtract(3, 5)).toBe(-2);
});

test("Multiplying: 4 x 3 = 12", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test("Dividing 1: 5 / 2 = 2.5", () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
});

test("Dividing 2: 5 / 0 = Infinity", () => {
    expect(calculator.divide(5, 0)).toBe(Infinity);
});

test("Caesar Cipher: Same Case", () => {
    expect(caesarCipher("I'm only human, after all!", 0)).toBe("I'm only human, after all!");
});

test("Caesar Cipher: Z to A", () => {
    expect(caesarCipher("Zark Muckerberg wrote this.", 1)).toBe("Absl Nvdlfscfsh xspuf uijt.");
});

test("Analyze Array: [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});