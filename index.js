// Code your solution in this file!
function returnDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    console.log(returnFirstTwoDrivers(drivers)); // output: ["Antonia", "Nuru"]
    console.log(returnLastTwoDrivers(drivers)); // output: ["Amari", "Mo"]
    console.log(selectingDrivers[0](drivers)); // output: ["Antonia", "Nuru"]
    console.log(selectingDrivers[1](drivers)); // output: ["Amari", "Mo"]
    const fareMultiplier = createFareMultiplier(3);
    console.log(fareMultiplier(10)); // output: 30
    console.log(fareDoubler(10)); // output: 20
    console.log(fareTripler(10)); // output: 30
    console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // output: ["Antonia", "Nuru"]
    console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // output: ["Amari", "Mo"]
  }
  
  function returnFirstTwoDrivers(drivers) {
    return ['Antonia', 'Nuru'];
  }
  
  function returnLastTwoDrivers(drivers) {
    return ['Amari', 'Mo'];
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  returnDrivers();
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  function fareDoubler(integer) {
    return createFareMultiplier(2)(integer);
  }
  function fareTripler(integer) {
    return createFareMultiplier(3)(integer);
  }
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }