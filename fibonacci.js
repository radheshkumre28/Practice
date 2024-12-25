// Fibonacci series : Find nth number
// 0,1,1,2,3,5,8,13,21,34,55




let n = 7;



let nFibonacci = async (n) => {
    
    if(n <= 1){
        return n
    }
    else {
        return await nFibonacci(n - 1) + await nFibonacci(n - 2)
    }
}


nFibonacci(n).then((ans) => {
    console.log(ans)
})