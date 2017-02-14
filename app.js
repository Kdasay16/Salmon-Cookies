'use strict';

//store 1st & Pike
var storeOne = {
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  salesPerHour: [],
  returnRandom: function(){
    return Math.floor(Math.random() * ( this.maxCustomers + 1 - this.minCustomers) + this.minCustomers);
  }
};

//store SeaTac Airport
var storeSeaTac = {
  name: 'Seatac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  salesPerHour: [],
  returnRandom: function(){
    return Math.floor(Math.random() * ( this.maxCustomers + 1 - this.minCustomers) + this.minCustomers);
  }
};

//store Seattle Center
var storeSeattle = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  salesPerHour: [],
  returnRandom: function(){
    return Math.floor(Math.random() * ( this.maxCustomers + 1 - this.minCustomers) + this.minCustomers);
  }
};

// store Capital Hill
var storeCapital = {
  name: 'Capital Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  salesPerHour: [],
  returnRandom: function(){
    return Math.floor(Math.random() * ( this.maxCustomers + 1 - this.minCustomers) + this.minCustomers);
  }
};

//store Alki
var storeAlki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  salesPerHour: [],
  returnRandom: function(){
    return Math.floor(Math.random() * ( this.maxCustomers + 1 - this.minCustomers) + this.minCustomers);
  }
};

//store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//stores Array
var stores = [storeOne, storeSeaTac, storeSeattle, storeCapital, storeAlki];

//for loop for all stores
for(var j = 0; j < stores.length; j++){
  var storeHours = document.createElement('ul');
  for (var i = 0; i < openHours.length; i++){
    stores[j].salesPerHour.push(parseInt(stores[j].returnRandom() * stores[j].avgCookieSale));
    var saleHour = document.createElement('li');
    saleHour.textContent = openHours[i] + ': ' + stores[j].name + ' ' + stores[j].salesPerHour[i] + ' cookies.';
    storeHours.appendChild(saleHour);
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
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  var minCustomersEl = document.createElement('td');
  minCustomersEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustomersEl);

  var maxCustomersEl = document.createElement('td');
  maxCustomersEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustomersEl);

  var avgCookieEl = document.createElement('td');
  avgCookieSaleEl.textContent = currentStore.avgCookieSale;
  rowEl.appendChild(avgCookieEl);
}

document.body.appendChild(tableEl);
