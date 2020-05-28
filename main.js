function add(x, y) {
    return x + y
}
const result = add(5, 6)
console.log(result)

function multipy(x, y) {
    let product = 0
    for (let index = 0; index < y; index++) {

        product = add(x, product)
        
    }
    return product

}
const result2 = multipy(2, 9)
console.log(result2)

function power(x, n) {
    let product = 1
    for (let index = 0; index < n; index++) {
        product = multipy(x, product)
        
    }
    return product
}
const result3 =power(3,4)
console.log(result3)
 
function factorial (x){
    let product=1
     for (let index = x; index > 1; index--) {
        product = multipy (index,product)
        
     }
     return product

 }
 const result4=factorial(5)
 console.log(result4)