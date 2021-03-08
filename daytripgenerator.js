"use strict"

//Array list of random types for trip
let destination = ['California', 'Arkansas', 'Colorado', 'Las Vegas'];
let restaurant = ['Italian', 'Steak House', 'Korean BBQ', 'Pizza'];
let transportation = ['Train', 'Car', 'Air Plane', 'Helicopter'];
let entertainment = ['Concert', 'Movie', 'Amusement Park', 'Beach'];
let userInput = ['0','1', '2', '3', '4']

function randomTripGen (array) {

    let value = array[Math.floor(Math.random() * array.length)];    //randomly generates array entered into argument

    return value;
}
 
let randomDestination = randomTripGen(destination);         //prints random destination

let randomRestaurant = randomTripGen(restaurant);           //prints random restaurant

let randomTravelType = randomTripGen(transportation);       //prints random transportation

let randomEntertainment = randomTripGen(entertainment);     //prints random entertainment 

let destinationResult = prompt(`Here is your randomized trip!  ${randomDestination} is your destination, ${randomRestaurant} is a good spot for food, ${randomTravelType} is how you will travel, and ${randomEntertainment} is your entertainment!  Will you be taking this trip?`);  // alerts user his randomized trip


if(destinationResult === "no") {  //if user chooses no, it will propt them to pick the part of the trip they wish to choose.
    let changeDestinationResult = prompt("Which part of your trip would you like to change? (1) Destination, (2) Restaurant, (3) Transportation, or (4) Entertainment?")
    changeDestinationResult === travelTypeChange(userInput[changeDestinationResult])
    
}


function travelTypeChange (userInput) {  //takes the result from changeDestinationResult and uses the yesOrNo function to give random part of trip the user wishes to switch.
    if(userInput === "1"){
        yesOrNo(destination)
    }
    else if (userInput === "2") {
        yesOrNo(restaurant)
    }
    else if (userInput === "3") {
        yesOrNo(transportation)
    }
    else if (userInput === "4") {
        yesOrNo(entertainment)
    }
}


function yesOrNo (selection) {
   let i = prompt(` ${randomTripGen(selection)} a better selection?`);
   if(i === "no"){
       return i;
   }
   else {
       return;
   }
}