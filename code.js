function fib(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    
    if (n === 0){
        return 0;
    }
    else if (n ===1){
        return 1;
    }
    else {
        let i = 1;
       arr[1+i] = fib(n-1) + fib(n-2);
        i++;
    }
}
