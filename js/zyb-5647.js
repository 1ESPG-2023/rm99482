// const liElement = document.getElementsByTagName("li");
// for (let index = 0; index<liElement.length; index++){
//     console.log(liElement[index].textContent)
// }
// console.log(liElement)
let nr1 = [1,2,3,4,5]
let nr2 = [6,7,8,9,10]
let nr3 = [nr1+nr2]
console.log(`Array1-${nr1}`)
console.log(`Array2-${nr2}`)
console.log(`Array3-${nr3}`)

///Listando um array tecnica especial
nr3.forEach((itemdDoaArray)=>{
    console.log(`Array3- sendo listado ${itemdDoaArray}`)
})
