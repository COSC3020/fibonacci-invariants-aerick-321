function fib(n) {
    const arr = new Array (n + 1);
    arr[0] = 0
    if (n > 0) arr[1] = 1;
    
    function helpFib(x){
        if (arr[x] !== undefined) {
            return arr[x];
        }
        arr[x] = helpFib(x-1) + helpFib(x-2);
        return arr[x];
    }
    helpFib (n);
    return arr;
}
