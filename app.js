'use strict';
//store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var table = document.createElement('table'); //tableEl = <table></table> in HTML
document.body.appendChild(table);

var header = document.createElement('thead');
table.appendChild(header);

var headRow = document.createElement('tr');
header.appendChild(headRow);

var hoursHead = document.createElement('th');
header.textContent = 'Hours Open';
header.appendChild(hoursHead);


var storeOne = new CookieStore('First and Pike', 23, 65, 6.3);
var storeSeaTac = new CookieStore('Seatac Airport', 3, 24, 1.2);
var storeSeattle = new CookieStore('Seattle Center', 11, 38, 3.7);
var storeCapitol = new CookieStore('Capitol Hill',20, 38, 2.3);
var storeAlki = new CookieStore('Alki', 2, 16, 4.6);

//stores Array
var stores = [storeOne, storeSeaTac, storeSeattle, storeCapitol, storeAlki];

function CookieStore(displayName, minCustomers, maxCustomers, avgCookies){
  this.displayName = displayName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCount = [];
  this.range = maxCustomers - minCustomers;
  this.totalStoreSales = 0;
};

CookieStore.prototype.salesPerHour = function(){
  return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
};

CookieStore.prototype.populateHourlyCount = function() {
  for (var i = 0; i < openHours.length; i++) {
    this.hourlyCount.push(this.salesPerHour());
    this.totalStoreSales += this.hourlyCount[i];
  }
  console.log(this.totalStoreSales);
  // var totalSales = document.createElement('td');
  // storeRow.appendChild(totalSales);
  // storeName.textContent = total;

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
  var total = document.createElement('td');
  storeRow.appendChild(total);
  total.textContent = this.totalStoreSales;
};

for (var k = 0; k < openHours.length; k++){
  var loopHead = document.createElement('th');
  loopHead.textContent = openHours[k];
  headRow.appendChild(loopHead);
}

function hourlyTotals() {
  var footer = document.createElement('tfoot');
  var totalName = document.createElement('td');
  footer.appendChild(totalName);
  totalName.textContent = 'Hourly Totals';
  //footer.appendChild(totalName);
  var totalHourlySales = [];

  for (var i = 0; i < openHours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < stores.length; j++){
      hourlyTotal += stores[j].hourlyCount[i];
    }
    var hourlyTotalTd = document.createElement('td');
    footer.appendChild(hourlyTotalTd);
    hourlyTotalTd.textContent = hourlyTotal;
  }
  table.appendChild(footer);
}

//
//   for (var i = 0; i < openHours.length; i++) {
//     var hourlyTotal = 0;
//     for (var j = 0; j < stores.length; j++){
//       hourlyTotal += stores[j].hourlyCount[i];
//     }
//     var hourlyTotalTd = document.createElement('td');
//     footer.appendChild(hourlyTotalTd);
//     hourlyTotalTd.textContent = hourlyTotal;
//   }
//   table.appendChild(footer);
// }



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
hourlyTotals();
//event listeners

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit); //an event listener just waiting to be fired. Will not fire unless clicked

function handleSubmit(event){
  event.preventDefault(); //prevented page from reloading after they hit submit, prevents all default behavior for submit
  event.stopPropagation(); //stops bubbling, stops capturing

  var storeName = event.target.cookieStoreName.value; // target is overarching node, cookieStoreName is the nested node, value will give you the value
  var minCust = parseInt(event.target.minCustomers.value); // target = storeFormEl, cookieStoreName is the input field, value = text givin
  var maxCust = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  console.log(storeName);
  console.log(minCust);
  console.log(maxCust);
  console.log(avgCookies);

  var store = new CookieStore(storeName, minCust, maxCust, avgCookies);
  store.populateHourlyCount();
  store.makeRow();
  stores.push(store);

  console.log(store.hourlyCount);

  console.log('User Pressed Submit Button On Form!');
}
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
//   saleHour.textContent = stores[j].hourlyCount;
//   rowEl.appendChild(sale);
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
