/*
function name is sayHi
parameters: nameStr - string

return string

concatenation
interpolation
*/

console.log("\nsayHi Function");

function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}
console.log(sayHi("Ainz"));
console.log(sayHi("Ooal"));
console.log(sayHi("Gown"));

console.log("\nbigString Function");

function bigString(str1, str2){
    if(str1.length > str2.length){
        console.log("The first string is bigger.");
    } else if(str1.length < str2.length){
        console.log("The second string is bigger.");
    } else if(str1.length = str2.length){
        console.log("The strings are equal.");
    }

}
bigString("Yo mama", "is so fat");
bigString("Yo mama", "cute");
bigString("Yo mama", "Yo dada");

console.log("\nbigNumber Function");

function bigNumber(num1, num2){
    if(num1 > num2){
        console.log("The first number is bigger.");
    } else if(num1 < num2){
        console.log("The second number is bigger.");
    } else if(num1 = num2){
        console.log("The numbers are equal.");
    }

}
bigNumber(2, 1);
bigNumber(1, 2);
bigNumber(1, 1);

console.log("\nfiveMore Function");

function fiveMore(array1){
    let i = 0;
    let newArray1 = [];
    while(i < array1.length){
        if(array1[i] % 2 === 0){
            newArray1.push(array1[i]);
        } else{
            newArray1.push(array1[i] + 5);
        }
        i++;
    }
    return newArray1;
}
console.log(fiveMore([5, 6, 7, 8]));
console.log(fiveMore([18, 24, 26, 4, 94, 30]));
console.log(fiveMore([7, 13, 15, 17, 19]));

console.log("\narraySummer Function");

function arraySummer(array2){
    let i = 0;
    let burrito = 0;
    while(i < array2.length){
        // array2[i] + burrito
        burrito += array2[i]
        i++;
    }
    return burrito;
}
console.log(arraySummer([1, 2, 3, 4]));
console.log(arraySummer([2, 4, 6, 8, 10]));
console.log(arraySummer([3, 6, 9, 12, 15]));

console.log("\neveryDivisable Function");

function everyDivisable(number){
    let enchilada = number;
    while (enchilada < 100){
        console.log(enchilada);
        enchilada = enchilada + number;    
    }
}

everyDivisable(10);
everyDivisable(20);
everyDivisable(45);