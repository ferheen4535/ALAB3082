//part 1 develope a program to predict and control the growth and maintance of the plants in a given area///

const Pi = 3.1415
const radius = 5
const area = Pi * radius * radius


const minperPlant = 0.8
let plants = 20 
let capacity = 0 //how much area do plants take //
let growth =  2

//predict the plant growth after 1 weeks//
capacity = plants * growth * minperPlant 
plants = plants * growth
console.log("This is week 1 plants capacity - " + capacity)

console.log("This is week 1 total number plants - " + plants)

if (capacity > area * 0.8)
    {
        console.log ("Capacity over 80%, prune")
    }
    else if (capacity >= area * 0.5){
    
        console.log ("Capacity is 50% to 80% capacity") 
        
        } else {
            console.log("Capacity is below 50%, can plant more")
        }

        
//predict the plant growth after 2 weeks//
capacity = plants * growth * minperPlant 
plants = plants * growth
console.log("This is week 2 plants capacity - " + capacity)

console.log("This is week 2 total number plants - " + plants)

if (capacity > area * 0.8)
    {
        console.log ("Capacity over 80%, prune")
    }
    else if (capacity >= area * 0.5){
    
        console.log ("Capacity is 50% to 80% capacity") 
        
        } else {
            console.log("Capacity is below 50%, can plant more")
        }
      
//predict the plant growth after 3 weeks//
capacity = plants * growth * minperPlant 
plants = plants * growth
console.log("This is week 3 plants capacity - " + capacity)

console.log("This is week 3 total number plants - " + plants)

if (capacity > area * 0.8)
    {
        console.log ("Capacity over 80%, prune")
    }
    else if (capacity >= area * 0.5) {
    
        console.log ("Capacity is 50% to 80% capacity") 
        
        } else {
            console.log("Capacity is below 50%, can plant more")
        }

//Implement control flow to make decisions on whether  the plants should be: pruned, monitored, planted//



//part 2//

plants =100
plants = plants * 2
capacity = plants * minperPlant
console.log("Number of plants for 10 weeks" + plants)
console.log("The capcity for the plants " + capacity)

// //part 3 I tried the try and catch //



try {
    capacity = plants * minperPlant; 
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
  

 










