// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(array.length - 2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(fare){
    return fare * int
  }
}

const fareDoubler = function(fare){
  createFareMultiplier(2)
}


// function fareDoubler(fare){
//   return fare * 2
// }

function fareTripler(fare){
  return fare * 3
}

function selectDifferentDrivers(drivers, func){
  return func(drivers)
}