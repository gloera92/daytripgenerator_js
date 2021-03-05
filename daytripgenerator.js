"use strict"

let destination = ['California', 'Arkansas', 'Las Vegas'];
let restaurant = ['Italian', 'Steak House', 'Korean BBQ'];
let transportation = ['Train', 'Car', 'Air Plane'];
let entertainment = ['Concert', 'Movie', 'Amusement Park'];

function randomTripGen (array) {

    let value = array[Math.floor(Math.random() * array.length)];    //randomly generates array entered into argument

    return value;
}
    
let randomDestination = randomTripGen(destination);         //prints random destination

let randomRestaurant = randomTripGen(restaurant);           //prints random restaurant
console.log(randomRestaurant);

let randomTravelType = randomTripGen(transportation);       //prints random transportation
console.log(randomTravelType);

let randomEntertainment = randomTripGen(entertainment);         //prints random entertainment
console.log(randomEntertainment);


let destinationResult = alert(`This will be your randomized trip!  ${randomDestination} is your destination, ${randomRestaurant} is a good spot for food, ${randomTravelType} is how you will travel, and ${randomEntertainment} is your entertainment!`);          //alerts user his randomized trip

//let destinationChoice = prompt(`Was ${randomDestination} a good selection?`);           //allows the user to pick is the destination is suitable



