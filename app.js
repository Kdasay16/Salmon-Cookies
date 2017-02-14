'use strict';

//store 1st & Pike
var storeOne = {
  name: 'first-and-pike',
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
  name: 'seatac-airport',
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
  name: 'seattle-center',
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
  name: 'capital-hill',
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
  name: 'alki',
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
    saleHour.textContent = 'At ' + openHours[i] + ' ' + stores[j].name + ' ' + stores[j].salesPerHour[i] + ' cookies.';
    storeHours.appendChild(saleHour);
  }
  var storeSection = document.getElementById(stores[j].name);
  storeSection.appendChild(storeHours);
}
