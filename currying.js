//currying with closures
function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));

//currying with bind

let multiply=function(x,y){
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,3);
multiplyByTwo(2);

let mulitplyByThree=multiply.bind(this,5);
mulitplyByThree(2);