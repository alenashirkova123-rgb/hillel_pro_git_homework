function pow(x, y) {
    var res; 
    console.log('Спочатку res дорівнювала ' + res);
    res = 1;

    for (var i = 0; i < y; i++) {
    res = res * x ;
    }

    console.log('потім res=' + res);
    return res;
}

let res = pow(2, 3)
console.log("Результат res =", res);