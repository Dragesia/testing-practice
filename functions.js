function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

function caesarCipher(str, shift) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    str
        .split("")
        .forEach(letter => {
            if (lowerCase.includes(letter)) {
                let newPos = lowerCase.search(letter) + shift >= lowerCase.length ? lowerCase.search(letter) + shift - lowerCase.length : lowerCase.search(letter) + shift;
                result += lowerCase.charAt(newPos);
            } else if (upperCase.includes(letter)) {
                let newPos = upperCase.search(letter) + shift >= upperCase.length ? upperCase.search(letter) + shift - upperCase.length : upperCase.search(letter) + shift;
                result += upperCase.charAt(newPos);
            } else {
                result += letter;
            }
        });
    return result;
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
