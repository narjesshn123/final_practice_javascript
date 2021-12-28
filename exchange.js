

function change(n, x, y, z, a, b, c) {
    let number = 0
    for (let derham = 0; derham <= x; derham++) {
        for (let uro = 0; uro <= y; uro++) {
            for (let dolar = 0; dolar <= z; dolar++) {
                if (derham * a + uro * b +  dolar * c  === n) {
                    number++;
                }
            }
        }
    }
    console.log(number)

}
change(60000, 3, 3 ,3, 30000, 20000, 30000 )