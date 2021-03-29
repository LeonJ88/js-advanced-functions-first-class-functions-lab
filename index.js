// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
};

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num1) => {
    return (fare) => fare * num1;  
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverFunctions) {
    return driverFunctions(driverArray);
}
