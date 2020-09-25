//Author : Clay Bowser
//Date Last Modified : 2020/09/19
/// Notes :
/// 
/// 



//enables readline-sync
var readlineSync = require('readline-sync');

//global variables
var customerName;
var deliveryCost;
var distance;
var purchaseCost;
var totalCost;
var taxRate = 1.14;

console.log('Hipster\'s Local Vinyl Records Customer Order Details\n');

//Gather input from user and store into variable
customerName = readlineSync.question("Enter the customer\'s name: ");
   //Validate input from user
   while (customerName.length > 20 || customerName.length < 5 || typeof customerName !== 'string'){
      customerName = readlineSync.question("Please enter a valid name: ");
   }

distance = readlineSync.question("Enter the distance in kilometers for delivery: ");
   while (distance > 1000000 || distance < 1 || isNaN(distance)){
      distance = readlineSync.question("Please enter a valid distance in kilometers: ");
   }

purchaseCost = readlineSync.question("Enter the total purchase cost: ");
   while (purchaseCost > 1000000 || purchaseCost < 1 || isNaN(purchaseCost)){
      purchaseCost = readlineSync.question("Please enter a valid purchase cost: ");
   }

//Convert string to decimal number
distance = parseFloat(distance);
purchaseCost = parseFloat(purchaseCost);

//Calculate delivery cost 
deliveryCost = distance * 15;

//Calculate total cost
purchaseCost = purchaseCost * taxRate;
totalCost = deliveryCost + purchaseCost;

//Output information to user
console.log("\nPurchase Summary for " + customerName + ":");
console.log("Delivery Cost: $" + deliveryCost.toFixed(2));
console.log("Purchase Cost: $" + purchaseCost.toFixed(2));
console.log("Total Cost:    $" + totalCost.toFixed(2));