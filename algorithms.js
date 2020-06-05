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

var ar1 = [1,2,5,10];

//first I had to make sure i remembered how to feed an array to a 
//funtion in javascript
function dummyFunc(total, num){
    return total + num;
}

//use reduce rather than use the spread operator to send the array to greedyFunc
document.getElementById("test-2").innerHTML
+= ar1.reduce(dummyFunc);

function greedyFunc(total, num){
    return total + Math.max(num);
}

document.getElementById("algorithm-1").innerHTML += ar1.reduce(greedyFunc);