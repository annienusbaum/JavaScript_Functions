
// Exercise 1 Section {--------------:)-----------------:)------------------}
//create a function called printOdds, parameter called count and a scope
// curly braces for the function body or scope
// for loop 

function printOdds(count) {
 for (let i = 1; i <= count; i++) {
    if (i% 2 != 0) {
        console.log(i);
    }
 }
}
 printOdds(10); // print all odd numbers from 1-10
 printOdds(100); // printing all of numbers (1-100)


 // Exercise 2 Section  {----------------:)-----------------:-)-------<:))---------}
 //shorting user name and user age to name and age
function checkAge(name, age) {
    let oldEnough = `Congrats ${name}! You can drive!`;
    let notOldEnough = `Sorry ${name}, you're not old enough to drive. You must wait ${16 - age} year(s).`;

    if (age < 16) {
      console.log(notOldEnough)  
    } else {
        console.log(oldEnough)
    }
}

checkAge("Annie", 12);
checkAge("Liam", 16);
checkAge("Willow", 21);
 

 // Exercise 3 Section  {--------------:)------------ ~~~``~~~~ ----------------:)-------}
/*
Write a function that receives two parameters, x and y coordinates in
the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis,
 or what quadrant the point lies in.
 // alternative is a switch case - all values = true or false. with a switch case, match the true value and each of the 
 // cases are expressions that can be true or false 
 */
function checkQuadrant(x, y){
    let quadrant; //optional

    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;    
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));


/*
// Exercise 4 Section  {--------------:)------------ ~~~``~~~~ ----------------:)-------}
Triangles _/\_
//     --------
*/
// any two sides must be greater than the third. writing conditions to check every side of the triangle. 
//

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}
function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b ,c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2, 3, 4)); //scalene
console.log(checkTriangle(2, 2, 2)); //eq
console.log(checkTriangle(1, 2, 2)); //isosceles
console.log(checkTriangle(1, 1, 2)); //invalid


/*
// Exercise 5 Bonus Section  {--------------:)------------------:)-------}
Data Plan
Write a function that will display feedback on cell phone data usage. Cell phone
plans for this particular company give you a certain amount of data every 30 days
which must be used or they are lost (no rollover). We want to track the average amount of data
 used per day and inform the user if they are using too much data or can
afford to use more.
// how many days are in a period? 30 - going to subtract the days remaining from 30
Write a function that accepts the following parameters:
- taking in 3 values
- `planLimit`: amount of data in the plan per 30 day period
- `day`: the current day in the 30 day period
- `usage`: the total amount of data used so far
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/
//function with params
function dataUsage(planLimit, day, usage) {
    let periodLength = 30; //
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} G/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)
    } GB from your data limit. 
    To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
} 
    dataUsage(50, 10, 25);
    
   
