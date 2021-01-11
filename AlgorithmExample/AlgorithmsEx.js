
//1.

function addTwoNum(num1 ,num2) {


    return num1 +num2; 
}

console.log(addTwoNum(5,9));

//2.

function yourFunction(firstName,lastName) {
    const yourFunction = "hi, my name is ".concat(firstName, " ", lastName, " .");

    return yourFunction;

}

function yourFunction2(firstName,lastName ) {

    const yourFunction2 = "hi, my name is " + firstName + " " + lastName + " ." ;

    return yourFunction2;
}

function yourFunction3(firstName, lastName ) {

    const yourFunction3 = `hi, my name is ${firstName} ${lastName} .`;

    return yourFunction3;
}

console.log(yourFunction("Zehra", "Nur")) ;
console.log(yourFunction2("Zehra", "Nur")) ;
console.log(yourFunction3("Zehra", "Nur")) ;

//3. Celcius to Fahrenheit

function celciusToFah(x) {

     console.log((x * 9) / 5 + 32 );
    

}

celciusToFah(30)

//4. fizz-buzz

function fizzy(x) {

    if ( x % 3===0  && x % 5 ===0 ) {

        return "fizzbuzz";
    }
    else if (x % 5 ===0) {
        return  "Buzz";

        } 

    else if (x % 3 === 0) {

        return "Fizz";  
      }

    else { 
        return "";

    }

    } ;

console.log(fizzy(25))


//5. Factorial

function factorializeNum(num) {

let variable = 1 ; 

 for ( let i =1 ; i <= num ; i++) {
    console.log(i)
    console.log(variable)
    variable *= i ; 

 }

    return variable;


}

console.log(factorializeNum(5));

//6. Funct. takes in a string and reverses its value.


function reverseIt(value) {

    let splitString = value.split("").reverse().join("");
     


    return splitString; 


}



reverseIt("merhaba");


//7. Palindrome or not 

function isPalindrome(stringEx) {


     let palindrome = stringEx.toLowerCase();
     let lastWord;

     palindrome =palindrome.replace(/[\W_]/g, "") 

     lastWord = palindrome.split("").reverse().join("");

     return lastWord === palindrome; 



}

isPalindrome("A man, a plan, a canal. Panama");
isPalindrome("mY age is 1, 1 si ega ym.");

//8. Take a string and returns the length of the longest string.

function myFunction(example) {

    let longestLength = 0 ; 
    let strArray  = example.split(" ");

   strArray.forEach((i) => {

        longestLength = longestLength < i.length ? i.length : longestLength;

    } ) ;
    
    return longestLength;
}

console.log(myFunction("I want to be super Data Analyst."));

//maybe also with sort method: 

function myFunction2(example) {

    let longestLength = 0 ; 
    let strArray  = example.split(" ");

   strArray = strArray.sort((str1, str2) => {

        return str1.length < str2.length

    } ) ;
    
    return strArray[0];
}

console.log(myFunction2("peace in home, Peace in world "));

//9. Take in a string and capitilize the first letter of each word.

function titleCase(str) {

    let newWord = str.split(" ");

    newWord = newWord.map((i) => {
        const firstLet = i.charAt(0).toUpperCase();

        i = firstLet.concat(i.slice(1 ,i.length));

        return i

    });

    newWord = newWord.join(" ");
    return newWord; 


}

titleCase("I am a super Data Analyst")

//10. Number that repeats the string that number of items.

function repeating(str,num) {

    let repeating = " "; 

    while (num > 0) {
        
        repeating = repeating.concat(str);

        num--;
          
    }

   return repeating; 


}

repeating("merhaba", 5)


//11. Is it digit or not ? Digit => 0-9 


function isDigit(valuenum) {

    const digitArray = ["0", "1" , "2","3",  "4" ,"5", "6", "7", "8", "9"] ;

    
    
        return digitArray.includes(valuenum) ; 

    

}


console.log(isDigit("3")) ; 
console.log(isDigit("p")) ; 


//12. 

function timeTry(time1) {

    let time = time1.split(":") ; 

    if (Number(time[0]) > 23 ) {

        return false;

    } 
    else if (Number(time[1]) > 59) {
       
    
        return false;
     }


     
    return true;
 

}

console.log(timeTry("23:31"))
console.log(timeTry("24:59"))


//13. Find missing number. 

function missingNumber(numarray) {

    
    const numarray1 = numarray.sort((num1,num2) => {

    return num1 - num2; 

} ) ; 

   for ( let i = 0 ; i < numarray1.length ; i ++ ) {

        if(i !== numarray1[i]) {
            return i ;
        }

   }


}
console.log(missingNumber([0,5,8,1,4,7]))

//14. isDuplicated or not. 

function missingNumber(numarray) {

    
    const numarray1 = numarray.sort((num1,num2) => {

    return num1 - num2; 

} ) ; 

   for ( let i = 0 ; i < numarray1.length ; i ++ ) {

        if(numarray1[i] === numarray1[i+1]) {
            return true ;
        }

   }

   return false
}
console.log(missingNumber([0,5,7,1,4,7,6]))


//15. Function will take a string and parse out all numbers and add them.


function addNum(justNum) {

    const numb = justNum.match(/\d+/g) || [] ;
    let sum = 0 ; 

    numb.forEach((i) => {

        sum += Number(i);

    });

        return sum;
}

console.log(addNum("4 cars, 5 people")) 

//16. Find unique value. 

function unique(arr1, arr2) {

    let array = [] ; 

    for (let variable of arr1) {
        if(!arr2.includes(variable) && !array.includes(variable)) {
            array.push(variable);

        }
    }

    for (let variable of arr2) {
        if(!arr1.includes(variable) && !array.includes(variable)) {
            array.push(variable);

        }
    }



    return array;

}
console.log(unique([1,7,8,5], [1,7,8,9,8,5]))