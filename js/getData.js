function getData(sAirport, fAirport, sDate, fDate, seatClass) {

console.log("You are leaving from: " + sAirport + " heading to: " + fAirport + ". Leaving on " + sDate + " and returning on " + fDate)
console.log("You have requested seat(s) in: " + seatClass)



var amadeus = new Amadeus({
  clientId: 'qFWSyWZObr4TMneA2obkDuAMsgtYkIVL',
  clientSecret: '0mcuJNFhsfEU0Tt8'
});

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'YYZ',
    destinationLocationCode: 'LGW',
    departureDate: '2020-04-01',
    returnDate: '2020-04-16',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});





}