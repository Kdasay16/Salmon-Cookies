'use strict';
//store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var table = document.createElement('table'); //tableEl = <table></table> in HTML
document.body.appendChild(table);

var storeOne = new CookieStore('first-and-pike', 'First and Pike', 23, 65, 6.3);
var storeSeaTac = new CookieStore('seatac-airport', 'Seatac Airport', 3, 24, 1.2);
var storeSeattle = new CookieStore('seattle-center', 'Seattle Center', 11, 38, 3.7);
var storeCapitol = new CookieStore('capitol-hill', 'Capitol Hill',20, 38, 2.3);
var storeAlki = new CookieStore('alki', 'Alki', 2, 16, 4.6);

//stores Array
var stores = [storeOne, storeSeaTac, storeSeattle, storeCapitol, storeAlki];

function CookieStore(name, displayName, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.displayName = displayName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCount = [];
  this.range = maxCustomers - minCustomers;
};

CookieStore.prototype.salesPerHour = function(){
  return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
};

CookieStore.prototype.populateHourlyCount = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.hourlyCount.push(this.salesPerHour());
  }
};
CookieStore.prototype.makeRow = function() {
  var storeRow = document.createElement('tr');
  table.appendChild(storeRow);

  var storeName = document.createElement('td');
  storeRow.appendChild(storeName);
  storeName.textContent = this.displayName;

  for (var i = 0; i < this.hourlyCount.length; i++) {
    var hourlyCookieCount = document.createElement('td');
    storeRow.appendChild(hourlyCookieCount);
    hourlyCookieCount.textContent = this.hourlyCount[i];
  }
};

function populateStoreCount() {
  for (var i = 0; i < stores.length; i++){
    stores[i].populateHourlyCount();
  }
}

function makeAllRows() {
  for (var i = 0; i < stores.length; i++){
    stores[i].makeRow();
  }
}
populateStoreCount();
makeAllRows();






// storeOne.populateHourlyCount();
//storeSeaTac.salesPerHour();
// storeSeattle.salesPerHour();
// storeCapital.salesPerHour();
// storeAlki.salesPerHour();
//console.log(pikePlace.hourlyCount[0]);
//
// //for loop for all stores
// for(var j = 0; j < stores.length; j++){
//   var storeHours = document.createElement('ul');
//   var storeTotal = 0;
// }
//   // for (var i = 0; i < openHours.length; i++){
//   //   stores[j].hourlyCount.push(stores[j].salesPerHour());
//   //   var saleHour = document.createElement('li');
//   //   saleHour.textContent = openHours[i] + ': ' + stores[j].displayName + ' ' + stores[j].hourlyCount[i];
//   //   storeHours.appendChild(saleHour);
//   //   storeTotal += stores[j].hourlyCount[i];
//   // }
//
// for (var i = 0; i < openHours.length ; i++){
//   var saleHour = document.createElement('td');
//   saleHour.textContent = stores[j].hourlyCount[];
//   rowEl.appendChild(sale);
//   total += stores[j].hourlyCount[j];
// }
//
//
// var storeSection = document.getElementById(stores[j].name);
// storeSection.appendChild(storeHours);
//
//

//
// for(var i = 0; i < stores.length; i++){
//   var currentStore = stores[i];
//
//   var rowEl = document.createElement('tr');
//   tableEl.appendChild(rowEl);
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.displayName;
//   rowEl.appendChild(nameEl);
//
//   var minCustomersEl = document.createElement('td');
//   minCustomersEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustomersEl);
//
//   var maxCustomersEl = document.createElement('td');
//   maxCustomersEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustomersEl);
//
//   var avgCookieSaleEl = document.createElement('td');
//   avgCookieSaleEl.textContent = currentStore.avgCookieSale;
//   rowEl.appendChild(avgCookieSaleEl);
// }
//
//
//event listeners

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit); //an event listener just waiting to be fired. Will not fire unless clicked

function handleSubmit(event){
  event.preventDefault(); //prevented page from reloading after they hit submit, prevents all default behavior for submit
  event.stopPropagation(); //makes sure that this event will not fire off in parent??

  var storeName = event.target.cookieStoreName.value; // target is overarching node, cookieStoreName is the nested node, value will give you the value
  var minCust = parseInt(event.target.minCustomers.value); // target = storeFormEl, cookieStoreName is the input field, value = text givin
  var maxCust = parseInt(event.target.maxCustomers.value);
  var avgCookies = (event.target.avgCookies.value);

  // console.log(storeName);
  // console.log(minCust);
  // console.log(maxCust);
  // console.log(avgCookies);
  var store = new CookieStore(name, minCust, maxCust, avgCookies);

  stores.push(store);

  console.log(storeName);
  console.log(store.populateHourlyCount());

  console.log('User Pressed Submit Button On Form!');
}
