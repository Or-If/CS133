/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 2, Group B Starter file by Brian Bird, spring 2022    
 * Orianna Schultz 10/25/2023 */

'use strict'

// 1. Cycling Plan
// Input: number of miles to increase distance by each week
// Output: a string containing weekly totals for the distance and speed
function makePlan(miles) {
    let output = "";
    let milesRan;
    for (let i=0; i<=5; i++) {
        milesRan = (i * miles) +5
        output += milesRan + ",&ensp;&ensp;" + (milesRan / .5) + "<br>"
    }
    // TODO: Write the code that concatentates   distance and speed to output
    return output;
}

// 2. 
// Input: round trip trail distance, elevation gain of the trail
// Output: a string saying either "Easy", "Moderate", "Hard" or "Challenging"
function reportRating(distance, elevationGain) {
    
    
    /* I just commented this out instead of removing to show what I had original 

    while (distance < 1 || distance > 15) {
        distance = prompt("Please enter a valid distance, between 1 and 15")
    }

    while (elevationGain < 0 || elevationGain > 3000) {
        elevationGain = prompt("Please enter a valid distance, between 0 and 3000")
    }
    */
   
    

    function trailDifficultyCalculator (trailMiles, trailElevationGain) {
        let trailAnswer;
        switch (true) {
          case (trailMiles <= 4 && trailElevationGain <= 500):
            return trailAnswer = "Easy"; 
          case (trailMiles <= 8 && trailElevationGain <= 1500):
            return trailAnswer = "Moderate";
          case (trailMiles <= 12 && trailElevationGain <= 3000):
            return trailAnswer = "Hard";
          default: 
            return trailAnswer = "Challenging"; 
        }
    }

    let rating = trailDifficultyCalculator(distance, elevationGain);
    // TODO: Add code from the solution in last week's lab
    return rating;
}

// 3. Trail Types
// Input: an activity. Choices are: hiking, Bike touring, Mountain biking, Horseback riding
// Output: trails that are suitable for that activity
function findTrails(activity) {
    let trails = "";
    
    while (activity == "") {
        activity = prompt("Please enter a valid activity \n -Hiking \n -Bike touring \n -Mountain biking \n -Horseback riding")
    }

    // TODO: Add code for finding trails from last week's lab

    switch (activity) {
        case "Hiking": 
            trails = "-Spencer Butte \n -Mossy Maple";
            break;
        case "Mountain biking":
            trails = "-Spencer Butte \n -Mount Baldy \n -Mossy Maple";
            break;
        case "Horseback riding":
            trails = "-North Boundry Trail \n -Elk Trail";
            break;
        case "Bike touring":
            trails = " -Corvallis to the Coast";
            break;
        default: 
            return trails = "unknown activity"
    }

    return trails;
}
