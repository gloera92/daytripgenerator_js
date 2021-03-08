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

function travelTypeChange (userInput) {  //takes the result from changeDestinationResult and uses the yesOrNo function to give random part of trip the user wishes to switch.
    if(userInput === "1"){
        
       randomDestination = yesOrNo(destination,destination);
        
    }
    else if (userInput === "2") {
        
        randomRestaurant = yesOrNo(restaurant,restaurant);
    }
    else if (userInput === "3") {
        
        randomTravelType = yesOrNo(transportation, transportation);
    }
    else if (userInput === "4") {
        
        randomEntertainment = yesOrNo(entertainment,entertainment);
    }
}

  function yesOrNo (selection,array) {            //re-randomizes until user is satisifed with trip changes.
      let newSelection = randomTripGen(selection);
      let i = prompt(` ${newSelection} a better selection?`);
    if(i === "yes"){
        return newSelection;
    }
     else if(i === "no"){
          for(let j = 0; j != "yes"; j++) {
        let newSelection = randomTripGen(array);       
       let userInput = prompt(` ${newSelection} a better selection?`);
       if(userInput === "yes") {
           return newSelection;
       }
    }

}
}

if(destinationResult === "no") {  //if user chooses no, it will propt them to pick the part of the trip they wish to choose.
    let changeDestinationResult = prompt("Which part of your trip would you like to change? (1) Destination, (2) Restaurant, (3) Transportation, or (4) Entertainment?") //asks user which part of trip they would like to randomize
    changeDestinationResult === travelTypeChange(userInput[changeDestinationResult])  
    let changedResult = (prompt(`Here is your new trip. ${randomDestination} is your destination, ${randomRestaurant} is a good spot for food, ${randomTravelType} is how you will travel, and ${randomEntertainment} is your entertainment!  Will you be taking this trip?`));


    while(changedResult === "no") {  //while changed result stays "no", code will loop until user is satisfied with change.
        let changeDestinationResult = prompt("Which part of your trip would you like to change? (1) Destination, (2) Restaurant, (3) Transportation, or (4) Entertainment?")
        changeDestinationResult === travelTypeChange(userInput[changeDestinationResult])
        changedResult = (prompt(`Here is your new trip. ${randomDestination} is your destination, ${randomRestaurant} is a good spot for food, ${randomTravelType} is how you will travel, and ${randomEntertainment} is your entertainment!  Will you be taking this trip?`));
    }
    
    if(changedResult === "yes"){     //alerts when user has finally confirmed their trip.
        console.log("Your randomized trip is now complete!")
        alert("Enjoy your trip!")
    } 
}
else if (destinationResult === "yes") {
    console.log("Your randomized trip is now complete!")
    alert("Enjoy your trip!") 
}






   



