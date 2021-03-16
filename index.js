//1. Take an object with your mother's name and your age . Now, create an obj for by adding to your sibling by age difference.
let obj={
  motherName:"Mommy",
  motherAge:41
}
let childObj={...obj,myName:"Son", myAge:obj.motherAge-20};
console.log(obj);
console.log(childObj);


//2. Take an array with 5 colors  create another array by adding two more colors to it.
let ar1=[ 'violet','yellow','red'];
let ar2=[...ar1,'blue','orange'];
console.log(ar1);
console.log(ar2);

//3. Let’s say we have a function called sum() which calculates the sum of an indefinite amount of numbers. Use rest parameter in it.
const sum=(...rest)=>{
  let s=0;
  rest.forEach(i=>s+=i);
  return s;
}
console.log("sum is: " +sum(1,2,3,4));

//4. Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers. ( avg() should return 0)

const avg=(...arr)=>{
  let s=0;
  arr.forEach(i=>s+=i);
  return s/arr.length;
}
console.log("avg is: " +avg(1,2,3,4));