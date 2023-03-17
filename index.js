// Code your solution in this file!
function returnDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    
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