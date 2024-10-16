function fib(n) {
    const arr = new Array (n + 1);
    arr[0] = 0
    arr[1] = 1
    
    function helpFib(x){
        if (x===0){
            return arr [x];
        }
        else if (x ===1){
            return arr [x];
        }
        else {
            arr[x] = helpFib(x-1) + helpFib(x-2);
        }
        return arr[x];
    }
    helpFib (n);
    return arr;
}
