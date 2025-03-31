//let obj ={
  //  name: "priyanshi",
  //  age: 25,
  //  weight: 40,
   // greet:function(){
   //     console.log("hello");
   // }
//}
//console.log(obj);
//obj.greet()
//console.log(typeof(obj));

/*function solve(num){
    return function(num){
        return num+num;
    }
}
let ans= solve(5);
let finalans=ans(10);

console.log(finalans);*/

/*let arr = [
    function(a,b)
    {
        return a+b;
    },
    function(a,b)
    {
        return a-b;
    }
]
let first= arr[1];
console.log(first(5,10));*/


let src = {
    age: 20,
    wt: 50,
    ht: 70
}
let dest ={...src};
src.age=50;
console.log(src);
console.log(dest)
