

function returnFirstTwoDrivers(array){
   return array.slice(0,2)

}

function returnLastTwoDrivers(array) {
  let num = array.length
    let numtwo = array.length - 2
    return array.slice(numtwo, num)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 
       

function createFareMultiplier(num, fare) {
    return (fare) => fare * num

}


 function fareDoubler(fare) {
    return fare*2

 }

function fareTripler(fare) {
    return fare*3

}

function selectDifferentDrivers(array, cb){
    return cb(array)

}