module.exports = function toReadable(number) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const exceptionsTen = ["ten", "eleven", "twelve"]
    const exceptionsOther = {
        2: "twen",
        3: "thir",
        4: "for",
        5: "fif",
        8: "eigh"
    }

    // works for numbers between 0 and 999;
    let numberString = number.toString()
    let numberLength = numberString.length
    let humanReadableNumber = ""

    if (number === 0) return numbers[number]; // zero

    // add hundreds
    if (numberLength === 3) {
        humanReadableNumber = `${numbers[numberString[0]]} hundred`;
        numberString = numberString.slice(1)
        numberLength = numberString.length
    }

    // for 100, 200, 300, ..., 900
    if (+numberString === 0) return humanReadableNumber;

    //for 1, 2,..., 9
    if (+numberString < 10) return `${humanReadableNumber} ${numbers[+numberString]}`.trim();

    //for 10, 11, 12
    if (+numberString < 13) return `${humanReadableNumber} ${exceptionsTen[numberString[1]]}`.trim();

    if (+numberString < 20) { // for 13,..,19
        return `${humanReadableNumber} ${((exceptionsOther.hasOwnProperty(numberString[1]) && numberString[1] !== "4")
            ? exceptionsOther[numberString[1]]
            : numbers[numberString[1]])}teen`
            .trim();
    } else { // for 20, ..., 99
        return `${humanReadableNumber} ${((exceptionsOther.hasOwnProperty(numberString[0]))
            ? exceptionsOther[numberString[0]]
            : numbers[numberString[0]])}ty ${((numberString[1] !== "0")
                ? numbers[numberString[1]]
                : "")}`
            .trim();
    }

}
