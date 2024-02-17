//pass by value
function passByValue(a,b){
    let temp;
    temp=a;
    a=b;
    b=temp;
    console.log("During pass by value the values are"+a+","+b);
}

let a=1;
let b=2;

console.log("Before pass by value the values are"+a+","+b);

passByValue(a,b);


console.log("After pass by value the values are"+a+","+b);

//pass by value will hold for variables and pass by refrence will hold for functions and objects

//pass by refrence

function passByReference(obj){

    let temp=obj.a;
    obj.a=obj.b;
    obj.b=temp;
    console.log("During pass by reference the values are"+obj.a+","+obj.b);
}


let obj={
    a:10,
    b:20
}

console.log("Before pass by reference the values are"+obj.a+","+obj.b);

passByReference(obj);

console.log("After pass by reference the values are"+obj.a+","+obj.b);




