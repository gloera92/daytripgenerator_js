"use strict"

let destination = ['California', 'Arkansas', 'Las Vegas'];
let restaurant = ['Italian', 'Steak House', 'Korean BBQ'];
let transportation = ['Train', 'Car', 'Air Plane'];
let entertainment = ['Concert', 'Movie', 'Picnic'];

function randomTripGen (array) {

    let value = array[Math.floor(Math.random() * array.length)];    //randomly generates array entered into argument

    return value;
}
    
let randomDestination = randomTripGen(destination);         //prints random destination

let destinationResult = alert(`${randomDestination} your random destination`);          //alerts user the option for a random destination

let destinationChoice = prompt(`Was ${randomDestination} a good selection?`);           //allows the user to pick is the destination is suitable

console.log(randomDestination);

let RandomRestaurant = randomTripGen(restaurant);           //prints random restaurant
console.log(RandomRestaurant);

let RandomTravelType = randomTripGen(transportation);       //prints random transportation
console.log(RandomTravelType);

let RandomEntertainment = randomTripGen(entertainment);         //prints random entertainment
console.log(RandomEntertainment);

