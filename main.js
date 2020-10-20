console.log("My Kata Collection")





//0 kata
console.log("add++++++")

function add(a,b){

    let result = a+b;
    return result;
    return a + b;
}

console.log(add(2,4));

//1 kata
console.log("multiply++++++++")

function multiply(num, times){
  // TODO what if times is zero
  // TODO what if times is negative
  var n = num;
  for(var i = 1; i < times; i++)
     num += n; // increments itself
  return num;
} 
console.log(multiply(4,6));

//2 kata
console.log("Multiply=====")

function multiply(x, y){
  let result = 0;
  while(x > 0){
     result += y;
     x--;
  }
  return result;
}
console.log(multiply(5,6));

// kata

console.log("exponent====");

function pow(base,power){
  var p=1;
  for (var i=0;i<power;i++)
  {
  p*=base;
  }
  return p;
  }

console.log(2**8);

// kata 

console.log("exponent");


function power(base, exp) {
  if (exp >= 1) {
    return base * power(base, exp - 1);
  } else if (exp > 0 && exp < 1) {
    //Trapped in this part ...
    //return power(base, 1 / exp);
  } else if (exp === 0) {
    return 1;
  } else {
    return 1 / (power(base, exp * (-1)))
  }
}

console.log(pow(2,8));

// Kata

console.log('factorial++++');


function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
console.log(factorialize(5));

// kata

console.log("multiply+=+++===");



function multiply(a, b){

  var arr=[]
  while(b>0){
  arr.push(a)
  b--
  
  }
  
  console.log(arr);
  
  var sum;
  sum = arr.reduce((a, b)=>{
    a = a+b;
    return a
  },0)
  console.log(sum);
  }
  
  multiply(6,+4);
  
  //exponential

  console.log("exponential++===+++===");

  function exponential(x, y) {
var arr = []
while(y>0){

  arr.push(x)
  y--
}
console.log(arr);
var sum;
sum = arr.reduce((x, y)=>{
 x = x+y;
 return x 

},0)


 }
 exponential(2,8);
 console.log(pow(2,8));
 exponential(3,4);
 console.log(pow(3,4));

 //kata 

 console.log("factorial===+++===");


 
function factorialize(num) {
  var arr = []
  
  while(num>0){
arr.push(num)
num--
  }
  console.log(arr);
  sum = arr.reduce((num, result)=> {
num = num +result;
return num
 },0);
 
}

console.log(factorialize(5));

 // var fibonacci1

 console.log("fibonacci2 ======");

 var fib = function(n) {

  var a=0, b=1, f=1, i=2;
  var arr = [];
  while(f<n){

    arr.push(f);
    f=a+b;
    a=b;
    b=f;
    i++;

  }
   return arr;
 }
 var fibArr=fib(8);
 console.log(fibArr);

 //kata 
 console.log('fib');

 var x = 0, y = 1;
var count = 2 ;
var fib ;
while(count++ <=7){
    var fib = x+y ;
    x = y ;
    y = fib;
}
console.log(fib);

//kata 

console.log("fibonacci1");

var fibonacci = function(result ,len) {

  var num1 = result[0],
  num2= result[1],
  next,
  count = 2;

  while (count< len) {

    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    count++;
  }
  return result;
}

 console.log (fibonacci([0 ,1], 8));