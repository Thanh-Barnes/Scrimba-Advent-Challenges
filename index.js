

// 2. deposit profit challenge - how many years it would take to reach the threshold

function depositProfit(deposit, rate, threshold) {
    let numOfYears = 0;
    let totalAmountAccumulated = 0;
    const growthRate = 1 + (rate/100);
    const firstYear = (deposit * growthRate);

    while (totalAmountAccumulated < threshold) {
        
        if (numOfYears === 0) {
            totalAmountAccumulated = firstYear;
            numOfYears++;
        }
        totalAmountAccumulated = totalAmountAccumulated * growthRate;
        numOfYears++;
    }
    return numOfYears;
}
depositProfit(100, 20, 170) //answer should be 3

// 3. chunky monkey challenge - fnc that splits an array (first arugment) into groups the length of size (second argument) and returns them as 2 dimensional arrayy

function chunkyMonkey(values, size) {
    const endOfLeftOverArr = values.length;
    let selectedArr = [];
    let leftOverArr = [];
    let bothArr = [];

    selectedArr = values.slice(0, size);
    leftOverArr = values.slice(size, endOfLeftOverArr);

    bothArr.push(selectedArr);
    bothArr.push(leftOverArr);
}
chunkyMonkey(['a', 'b', 'c', 'd'], 2) // {['a', 'b'], ['c', 'd']}

// 4. century from year - given a year, return the century it is in. (first century spans from 1 - 100 (included), second century 101 - 200 (included))

function centuryFromYear(num) {
    return Math.ceil(num/100);
}
centuryFromYear(2000) //20
centuryFromYear(200) //17

// 5. reverse a string

//option 1
// function reverseAString(str) {
//     let strToArr = str.split("");
    
//     let reversedArray = strToArr.reverse();
    
//     let joinArray = reversedArray.join("");
// }
// reverseAString('hello'); // 'olleh'
// option 2
function reverseAString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    console.log(reversed);
}
reverseAString('hello'); // 'olleh'

// 6. sort by length - given array of strings, sort in increasing order. If 2 strings have same length, their relative order must be the same as in the initial way.

function sortByLength(strs) {
    
    for (let i = 0; i < strs.length; i++) {
        
        for (let j = 0; j < strs.length-1; j++) {
            let firstStrIndex = j;
            let secondStrIndex = j + 1;

            let firstNumLen = strs[firstStrIndex].length
            let secondNumLen = strs[secondStrIndex].length

            if (firstNumLen === secondNumLen) {
                j++;

            } else if (firstNumLen > secondNumLen) {
                let temp = strs[firstStrIndex];
                strs[firstStrIndex] = strs[secondStrIndex];
                strs[secondStrIndex] = temp;
                j++;
            }  
        }
    }
    return strs;
}
sortByLength(["abc", "", "aaa", "a", "zz"]) // ["", "a", "zz", "abc", "aaa"]

// 7. count vowel consonant - given a string that consist of lowercase english letters. if vowels (a e i o u) are given a value of 1 and consonants are given value of 2, returnt he sum of all the letters in the input string.

function countVowelConsonant(str) {
    
    let valueOfLetters = 0;
    let strToArr = str.split('')

    strToArr.forEach(letter => {
        let vowelstr = "aeiou";

        if (vowelstr.includes(letter)) {
            valueOfLetters++;
        }    
    })
        // longer original option
        //     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u ") {
        //         valueOfLetters++;
        //     } else {
        //         valueOfLetters += 2;
        //     }
        // });
    return valueOfLetters;
}
countVowelConsonant("abcde") // 8

// 8. rolling dice - 
console.log('refer to challenge 8 folder')