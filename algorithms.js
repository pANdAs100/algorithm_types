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
//attempt at cloning dummy function then modifying it's process to achieve creating our GREEDYFUNCTION
function greedyFunc(a,b,c,d){
    console.log("--greedy function--");
    const TARGETSUM = 18
    var coins = [a,b,c,d];
    var sum = Math.max(...coins);
    var max = Math.max(...coins);
    console.log((sum += Math.max(...coins)) < TARGETSUM);
    while(coins){
        coins.filter((e) => {return e != max});
        console.log(coins);
        max = Math.max(...coins);
    }
    console.log("the sum is " + sum);
}

document.getElementById("algorithm-1").innerHTML += greedyFunc(...ar1);