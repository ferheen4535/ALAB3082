const radius = 5
const PI = 3.1415
const area = PI * radius * radius 

const minSqm = 0.8
const plants = 20
const growth = 2
const maxcapcity = 98

console.log("----");
console.log(`Part One`);

//Predict the plant growth after a specific number of weeks.//
let weekonegrowth = (plants * growth);
console.log(`Amout of plants end of week one:`, weekonegrowth)

console.log("----");

let weektwogrowth = (weekonegrowth * growth);
console.log(`Amout of plants end of week two:`,weektwogrowth)

console.log("----");

let weekthreegrowth = (weektwogrowth * growth);
console.log(`Amout of plants end of week three:`,weekthreegrowth)



//Implement control flow to make decisions on whether the plants should be://
console.log("----");


let weekonetask = (weekonegrowth * minSqm) / maxcapcity;
console.log(`Week one growth rate capacity:`, weekonetask);

if (weekonetask < 0.5) {
    console.log(`For week one: Keep planting`); 
} else if (weekonetask > 0.8) {
    console.log(`For week one: Stop planting and prune`); 
} else if (weekonetask > 0.5 && weekonetask < 0.8) { 
    console.log(`For week one: Growing at an acceptable rate, so just monitor`); 
}

console.log("----");

let weektwotask = (weektwogrowth * minSqm) / maxcapcity;
console.log(`Week two growth rate capacity:`, weektwotask);

if (weektwotask < 0.5) {
    console.log(`For week two: Keep planting`); 
} else if (weektwotask > 0.8) {
    console.log(`For week two: Stop planting and prune`); 
} else if (weektwotask > 0.5 && weektwotask < 0.8) {
    console.log(`For week two: Growing at an acceptable rate, so just monitor`); 
}

console.log("----");

let weekthreetask = (weekthreegrowth * minSqm) / maxcapcity;
console.log(`Week three growth rate capacity:`, weekthreetask);

if (weekthreetask < 0.5) {
    console.log(`For week three: Keep planting`); 
} else if (weekthreetask > 0.8) {
    console.log(`For week three: Stop planting and prune`); 
} else if (weekthreetask > 0.5 && weekthreetask < 0.8) {
    console.log(`For week three: Growing at an acceptable rate, so just monitor`); 
}
console.log("----");
//Part 2//
//The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
//If the space remained circular, what would be the radius of this expanded garden?//
console.log(`Part 2`);
console.log("----");
const newplants = 100
const weeks = 10
const newgrowth = 2

let tenweekgrowth = (newplants * (newgrowth**weeks));
console.log(`Amount of plants in 10 weeks;`,tenweekgrowth,`plants`);

let newradius = (tenweekgrowth * minSqm);
console.log(`The new measurement for the new radius would be:`, newradius, `square meters`);

console.log("----");
console.log(`Part 3`);
console.log("----");

try{ 
    console.log(`try, catch, finally`);
  
}

catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}




// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources


//help used: https://www.youtube.com/watch?v=PgUXiprlg1k&t=566s//
//https://www.youtube.com/watch?v=NwoAZF66_Go&t=96s//

