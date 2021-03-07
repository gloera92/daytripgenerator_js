"use strict"

let destination = ['California', 'Arkansas', 'Colorado', 'Las Vegas'];
let restaurant = ['Italian', 'Steak House', 'Korean BBQ', 'Pizza'];
let transportation = ['Train', 'Car', 'Air Plane', 'Helicopter'];
let entertainment = ['Concert', 'Movie', 'Amusement Park', 'Beach'];

function randomTripGen (array) {

    let value = array[Math.floor(Math.random() * array.length)];    //randomly generates array entered into argument

    return value;
}
 
let randomDestination = randomTripGen(destination);         //prints random destination

let randomRestaurant = randomTripGen(restaurant);           //prints random restaurant

let randomTravelType = randomTripGen(transportation);       //prints random transportation

let randomEntertainment = randomTripGen(entertainment);     //prints random entertainment 

let destinationResult = prompt(`Here is your randomized trip!  ${randomDestination} is your destination, ${randomRestaurant} is a good spot for food, ${randomTravelType} is how you will travel, and ${randomEntertainment} is your entertainment!  Will you be taking this trip?`);  // alerts user his randomized trip

//let destinationChoice = prompt(`Was ${destinationResult} a good selection?`);           //allows the user to pick if the destination is suitable.

// function otherSelection (selection) {
//     let j = prompt(`Is ${selection[i]} a good choice?`)
//    for(let i = 0; i < selection.length; i++) 
   
//     if(j != "yes") 
//         j
    
//     else { 
//         return;
//     }


if(destinationResult === "yes"|| destinationResult === "Yes") {      //if user chooses yes, it will enter console log.  if user chooses no it will ask them which part of trip they want to change.
    console.log("Have a great trip!")
}
else {
    let chooseAnotherType = prompt(`Which part of the trip would you like to change?  (1) Destination,         (2) Restaurant, (3) Transportation, or (4) Entertainment?`);
    chooseAnotherType

switch(chooseAnotherType) {       //if user choose 1-4, it will select which part of trip they wanna change an re-roll that part of the trip.
    case "1":

    otherSelection(destination)

    break;

    case "2":

    otherSelection(restaurant)

    break;

    case "3":

    otherSelection(transportation)

    break;

    case "4": 

    otherSelection(entertainment)

    break;

    default:
        console.log("try again")

        }
    }



// if(destinationResult === "1" ) {
//     chooseArray(desination);


// }
// else if(destinationResult === "2") {
//     chooseArray(restaurant)
// }
// else if(destinationResult === 3) {
//     chooseArray(transportation)
// }
// else if(destinationResult === entertainment) {
//     chooseArray(entertainment)
// }
// else {
//     console.log("have a good trip")
// }
// }