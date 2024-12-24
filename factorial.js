// find the factorial of the given number
// 3x2x1

let factorial_of =  4 ;


let getFactorial = async (factorial_of) => {

    if(factorial_of < 0){
        return `Factorial for negative number is not defined`
    }
    
    if (factorial_of === 0 || factorial_of === 1) {
        return 1
    }
    else {
        return factorial_of * await getFactorial(factorial_of - 1)
    }

}


getFactorial(factorial_of).then((answer) => {
    console.log(answer)
})