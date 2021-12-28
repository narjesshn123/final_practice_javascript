function goalSubasa(n, a, b, min){
    if (min[min.length-1] > 90+ b) return "NO"
    for (let i=0 ; i< n; i++){
        if (min[i]>= 45 && min[i] <= 45 + a){
            if (min[i] + a < min[i-1] ){
                return "NO"
            }
        }
    }
    return "YES"
}
console.log(goalSubasa(4, 2, 4 , [4,45,48,93]))







// function goalSubasa (a, b, min){
//     const first = 45
//     const second = 90;
//     for (let i=0 ; i<min.length ; i++) {
//
//         if (min[i] > first + a) {
//             if (min[i] > min[i + 1])
//                 return 'no'
//             if (min[i] > second + b)
//                 return 'no'
//         }
//     }
//     return 'yes'
// }
//
// console.log(goalSubasa(5,6,[8,48,45,70,81,94]))