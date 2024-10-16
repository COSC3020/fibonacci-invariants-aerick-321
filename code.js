function fib(n) {
    const arr = new Array [n + 1];
    
    function helpFib(x){
        if (x === 0){
            arr [x] = 0;
        }
        else if (x ===1){
            arr [x]= 1;
        }
        else {
            arr[x] = helpFib(x-1) + helpFib(x-2);
        }
        return arr[x];
    }
    helpFib (n);
    return arr;
}
