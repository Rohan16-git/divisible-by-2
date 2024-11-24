const inputarray = [1,2,3,4,5,6,7,8,9,10]

const evennumbers = []
const oddnumbers = []

inputarray.forEach((num) => {
    if (num % 2 === 0){
        evennumbers.push(num)
    } else {
        oddnumbers.push(num)
    }
})
console.log("Original Array",inputarray)
console.log("Evennumbers Array",evennumbers)
console.log("Oddnumbers Array",oddnumbers)

