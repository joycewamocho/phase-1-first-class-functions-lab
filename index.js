// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);

}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier = 2) {
    return function(fare) {
        return fareMultiplier * fare;
    }
}

const fareDoubler= function(fare=10){
    return fare*2;
}

const fareTripler = function(fare=12){
    return fare*3;
}

const selectDifferentDrivers = function(drivers, callback) {
    return callback(drivers);
}


