//Without Rest Operator
function fun(a,b){
    return a+b;
}

console.log(fun(1,2));
console.log(fun(1,2,3,4,5));





//With Rest Operator

function funny(...input){
    let sum=0;
    for(let i of input){
        sum=sum+i;
    }
    return sum;
}


console.log(funny(1,2));
console.log(funny(1,2,3));
console.log(funny(1,2,3,4,5));

