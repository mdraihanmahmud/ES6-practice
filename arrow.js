//Common way to declair function


function doubleit(num){
    return num*2;
}
const result = doubleit(10);
//console.log(result);



//Another method to declair function

const doubleit = function(num){
    return num*2;
}
const result = doubleit(10);
//console.log(result);


//ES-6 Easy way to declair function

const doubleit = num => num*3;
const result = doubleit(100);
console.log(result);