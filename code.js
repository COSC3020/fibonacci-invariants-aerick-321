function fib(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    
    function helpFib(x){
        if (x === 0){
            return [0];
        }
        else if (x ===1){
            return [1];
        }
        else {
            arr[x] = helpFib(n-1) + helpFib(n-2);
        }
        helpFib(n);
        return arr;
    }
}
