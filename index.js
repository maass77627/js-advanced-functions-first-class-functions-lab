// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
   
}

const returnLastTwoDrivers = function(drivers) {
    let num = drivers.length
    let numtwo = drivers.length - 2
    return drivers.slice(numtwo, num)
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]


function createFareMultiplier(integer) {
    return function(fare) {
        return fare*integer
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTriple = createFareMultiplier(3)



const selectDifferentDrivers= function(drivers, cb) {
        return cb(drivers)
}