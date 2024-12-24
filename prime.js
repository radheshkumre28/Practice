//check if number is prime


let check_this_number = 59


let primeChecker = async (check_this_number) => {

    if (check_this_number <= 1 ){
        return `${check_this_number} is not a Prime Number`
    }

    else {
        for (let i = 2 ; i <= Math.sqrt(check_this_number); i ++){
            
            if (check_this_number % i === 0){
                return `${check_this_number} is not a Prime Number`
            }
            
        }
    }
    return `${check_this_number} is a Prime Number`

}


primeChecker(check_this_number).then((answer) => {
    console.log(answer)
})