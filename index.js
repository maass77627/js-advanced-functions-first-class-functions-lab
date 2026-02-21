


const returnFirstTwoDrivers = function (drivers) {
   return drivers.slice(0,2)

}

const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
   return function(fare) {
    return fare * integer;
  };

}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)
fareDoubler(4)
fareTripler(4)

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers)

}