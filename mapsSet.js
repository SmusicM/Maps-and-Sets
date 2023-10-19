//## **Quick Question #1**
//
//What does the following code return?
new Set([1,1,2,2,3,4])

//creates a new set {1,2,3,4} set auto removes duped values



//## **Quick Question #2**
//
//What does the following code return?
[...new Set("referee")].join("")

// 'ref' because ...new spreads it , new set removes dupes and than the 3 characters left join with ("")




//## **Quick Questions #3**
//
//What does the Map ***m*** look like after running the following code?
let m = new Map();
m.set([1,2,3], true); //{Array(3) => true} keeps set  since all unique and returns true
m.set([1,2,3], false); //{Array(3) => false} keeps set  since all unique and returns false





//## **hasDuplicate**
//
//Write a function called hasDuplicate which accepts an array and returns
//true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) =>{
    return [...new Set(arr)].join("") === arr;
}

const hasDuplicate = (arr) =>{
    const unique =  [...new Set(arr)].join("");
    if(unique === arr){
        return true;
    }else{
        return false;
    }
}

//solution way  const hasDuplicate = arr => new Set(arr).size !== arr.length

//## **vowelCount**
//
//Write a function called vowelCount which accepts a string and returns a map
//where the keys are numbers and the values are the count of the vowels in
//the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }


const vowelCount = (str) =>{
    const vowels = new Set (['a','e','i','o','u']);
    const outcome = new Map();
    for(let char of str){
        const lowcasecaps = char.toLowerCase();
        if(vowels.has(lowcasecaps)){
            outcome.set(lowcasecaps,
            (outcome.get(lowcasecaps) || 0)+1);
        }
    }
    return outcome;
}



//const vowelCount = (str) =>{
//    const vowels = "aeiou";
//    if(str.includes(vowels)){
//        console.log("hey");
//    }else{
//    return ("no");
//    }
//}

//const vowelCount = (str) =>{
//    const vowels = new Set ("aeiou");
//    for(let char of str){
//        if(vowels.has(char)){
//            return true;
//        }
//    }
//    return false;
//}

//const vowelCount = (str) =>{
//    const vowels = "aeiouAEIOU";
//    let mv = new Map();
//    let vowelsCase = vowels.toLowerCase();
//    for(let )
//    for(let[key,value] of str){
//        return(key, '=>' , value);
//    }
//}
//return str.filter((str)=> !str.has(vowelsCase));