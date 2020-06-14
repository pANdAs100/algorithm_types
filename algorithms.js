//Here are a collection of algorithms that can be maintained in javascript
//and easily maintained and displayed online by the developer

//first I will test that my script is actually working
a=1, b=4;

document.getElementById("test-1").innerHTML += a+b;
+"\n";

//example of Greedy Algorithm
//COUNTING COINS

//problem: count to a desired value by choosing the least possible coins
//purpose of greedy appreach is to force the algorithm to pick the largest possible coin

//I will send my array to a dummy function which will just accumulate each element with reduce.
//this is just a test for preparing my actual greedy function
function dummyFunc(a,b,c,d){
    //array allows us to traverse with reduce
    var coins = [a,b,c,d]; 
    console.log("here you can see the first test function traverse through the first set of coins:")
    const sum = coins.reduce(function(result, i){
        console.log("Coin value: " + i);
        return result + i;
    }, 0);
    return sum;
}

const ar1 = [1,2,5,10];

//the result of our dummy function is then applied to the display
document.getElementById("test-2").innerHTML
+= dummyFunc(...ar1);

//GREEDY APROACH
//Objective total: c18
//Takes the highest value in the array and checks if it goes over the targeted sum
//if it does not then this ammount is accumulated. If it does then that element is removed 
function greedyFunc(trgt, ...coins){
    console.log("--greedy function--");
    var numberOfSteps = 0;
    const TARGETSUM = trgt;
    // var coins = [a,b,c,d]; The prototype of the function can also have use rest to make the number of arguments variable
    var sum = Math.max(...coins);//sum is our accumulator
    var max = Math.max(...coins); //just makes it so we dont have to keep writing Math.max(...coins)
    // console.log((sum + Math.max(...coins)) < TARGETSUM);
    while(coins.length > 0){
        if((sum + max) <= TARGETSUM){
            // console.log("TRUE: (sum + max) <= TARGETSUM")
            // console.log("Therefor " + max + " is added to " + sum)
            sum += max;
            // console.log("new sum is " + sum);
        } else {
            // console.log("SUM + MAX IS GREATER THAN THE TARGET SUM");
            // console.log(max + " is removed from " + coins);
            coins = coins.filter((e) => {return e != max});
            max = Math.max(...coins);
        }
        numberOfSteps++;
    }
    return numberOfSteps;
}

//by changing the TARGETSUM from 18 to 15 we can clearly see that the greedyFunction is not optimum for most use cases
const ar2 = [1,7,10];
const testNumOne = 18;
const testNumTwo = 15;

document.getElementById("algorithm-1").innerHTML += greedyFunc(testNumTwo,...ar1);
document.getElementById("algorithm-1-2").innerHTML += greedyFunc(testNumTwo,...ar2);

//BINARY SEARCH

//SOURCES:
// https://www.tutorialspoint.com/data_structures_algorithms/greedy_algorithms.htm
// https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm
