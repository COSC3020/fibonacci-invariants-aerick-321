function fib(n) {
    if (n === 0){
        return 0;
    }
    else if (n ===1){
        return 1;
    }
    else {
         fib(n-1) + fib(n-2);
        return n;
    }
}
