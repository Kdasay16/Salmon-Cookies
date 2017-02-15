'use strict';

function CookieStore(name, displayName, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.displayName = displayName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCount = [];
  this.range = maxCustomers - minCustomers;
}

CookieStore.prototype.salesPerHour = function(){
  return Math.floor(Math.random() * ((this.range + 1) + this.minCustomers) * this.avgCookies);
};

var storeOne = new CookieStore('first-and-pike', 'First and Pike', 23, 65, 6.3);
var storeSeaTac = new CookieStore('seatac-airport', 'Seatac Airport', 3, 24, 1.2);
var storeSeattle = new CookieStore('seattle-center', 'Seattle Center', 11, 38, 3.7);
var storeCapitol = new CookieStore('capitol-hill', 'Capitol Hill',20, 38, 2.3);
var storeAlki = new CookieStore('alki', 'Alki', 2, 16, 4.6);

//stores Array
var stores = [storeOne, storeSeaTac, storeSeattle, storeCapitol, storeAlki];

//store hours
var openHours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//var hourlyCookies = [];

//storeOne.salesPerHour();
//storeSeaTac.salesPerHour();
// storeSeattle.salesPerHour();
// storeCapital.salesPerHour();
// storeAlki.salesPerHour();
//console.log(pikePlace.hourlyCount[0]);

//for loop for all stores
for(var j = 0; j < stores.length; j++){
  var storeHours = document.createElement('ul');
  var storeTotal = 0;
  for (var i = 0; i < openHours.length; i++){
    stores[j].hourlyCount.push(stores[j].salesPerHour());
    var saleHour = document.createElement('li');
    saleHour.textContent = openHours[i] + ': ' + stores[j].displayName + ' ' + stores[j].hourlyCount[i];
    storeHours.appendChild(saleHour);
    storeTotal += stores[j].hourlyCount[i];
  }
  var storeSection = document.getElementById(stores[j].name);
  storeSection.appendChild(storeHours);
}

//var stores = []

var tableEl = document.createElement('table'); //tableEl = <table></table>

for(var i = 0; i < stores.length; i++){
  var currentStore = stores[i];

  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.displayName;
  rowEl.appendChild(nameEl);

  var minCustomersEl = document.createElement('td');
  minCustomersEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustomersEl);

  var maxCustomersEl = document.createElement('td');
  maxCustomersEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustomersEl);

  var avgCookieSaleEl = document.createElement('td');
  avgCookieSaleEl.textContent = currentStore.avgCookieSale;
  rowEl.appendChild(avgCookieSaleEl);
}

document.body.appendChild(tableEl);
