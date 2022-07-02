function main (a, b, c) { 
  
}



// Перепишите функцию main следующим образом:

// Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.

function main (a=2, b=3, c) {
    let result = sum(a,b)
        if (typeof c === "function") {
        return c(result)
    } else {
        return result;
    }
}

function sum (a, b) { 
    return a + b; 
}

function mult (x) {
    return x *= 100
}

console.log(main(1,3,mult));




// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.


// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.
