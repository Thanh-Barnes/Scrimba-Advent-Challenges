

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

// 9 . sum odd fibonacci numbers - given a positive integer num, retgurn the sum all odd fibonacci numbers that are thess than or equal to num
function sumOddFibonacciNumbers(num) {
    
    let arr = [];
    let firstNum = 1;
    let secondNum = 1;
    arr.push(firstNum);
    arr.push(secondNum);
    
    for (let i = 0; i < num; i++) {
        let sumOfFirstNSecondNum = firstNum + secondNum;
        arr.push(sumOfFirstNSecondNum);
        firstNum = secondNum;
        secondNum = sumOfFirstNSecondNum;
    }
        
    let sumOfOddFibonacci = 0;
    
    for (let j = 0; j <= num; j++) {
        
        if (arr[j] % 2 === 1 && arr[j] <= num) {
            sumOfOddFibonacci += arr[j];
        }
    }
    return sumOfOddFibonacci;
}
// sumOddFibonacciNumbers(10) // 10
// sumOddFibonacciNumbers(1000) // 1785

// 10. adjacent elements product - given array of integers, find the pair of adjacent elements that has the largest (multiply) and return product
function adjacentElementsProduct(num) {
    let productArr = [];
    
    for (let i = 0; i < num.length-1; i++) {
        let firstNum = num[i];
        let secondNum = num[i + 1];

        let productTwoNum = firstNum * secondNum;
        productArr.push(productTwoNum);
    }
    productArr.sort();
    return productArr[productArr.length-1];

}
adjacentElementsProduct([3, 6, -2, -5, 7, 3]) // 21 which is 7 * 3

// 11. avoid obstables
function avoidObstacles(nums) {
    nums.sort();

    let highestNum = nums[nums.length - 1] + 1; // add 1 to jump over last num in array
    let minJump = 2; // cannot be 1 because would land on all num
    const isMinJump = (arrayVal) => (arrayVal % minJump) > 0;

    for (let i = minJump; i < highestNum; i++) {
        if(nums.every(isMinJump)) {
            return minJump;
        }
        else {
            minJump++;
        }
    }  

    //alternative answer
    // const largestNum = sums.sort((a, b) => a-b) [nums.length-1];
    // for (let i = 1; i <= largestNum _ 1; i++) {
    //     if (nums.every((value) => value % i !== 0)) {
    //         return i;
    //     }
    // }
}
avoidObstacles([5, 3, 6, 7, 9]) // 4

// 12 - valid time - check if the given string is a correct time representation of the 24-hour clock
function validTime(str) {
    let arr = str.split(":")
    let hr = parseInt(arr[0]);
    let mins = parseInt(arr[1]);
    
    if (hr >= 0 && hr < 24) {
        if (mins >= 0 && mins <= 60) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }     

    // alternative method per Scrimba
    // const [hours, minutes] = str.split(":");

    // if (parseInt(hours) > 23 || parseInt(hours) < 0) {
    //     return false;
    // }

    // if (parseInt(minutes) > 59 || parseInt(minutes) < 0) {
    //     return false;
    // }

    // return true;
}
validTime('13:58') // true
validTime('25:51') // false
validTime('02:76') // false

// 13 - extract each kth - given array of integers, remove each kth element from it
function extractEachKth(nums, index) {
    const remainingNums = nums.filter(nums => nums % index)
    return remainingNums;
}
extractEachKth([1, 2, 3, 4, 5, 6 ,7, 8, 9, 10], 3) // [1, 2, 4, 5, 7, 8, 10]

// 14 - maximal adjacent difference - given an array of integers, find the maximal absolute difference between any two of its adjacent elements
function arrayMaximalAdjacentDifference(nums) {

    let maxDiff = 0;

    for (let i = 0; i < nums.length; i++) {
        let diff = Math.abs(nums[i] - nums[i + 1]);

        if (maxDiff < diff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
}
arrayMaximalAdjacentDifference([2, 4, 1, 0]) // 3
arrayMaximalAdjacentDifference([2, 9, 1, 0]) // 8

// 15 - carousel is separate folder

// 16 - insert dashes - transform a given sentence into a new one with dashes between each two consecutive letters
function insertDashes(str) {
    let splitStr = str.split(" ");
    let dashedStrArr = [];
    
    for (let i = 0; i < splitStr.length; i++) {
        let splitAgain = splitStr[i].split("");
        dashedStrArr.push(splitAgain.join("-"));
    }    
    return dashedStrArr.join(" ");
}

insertDashes("aba caba") // "a-b-a c-a-b-a"







