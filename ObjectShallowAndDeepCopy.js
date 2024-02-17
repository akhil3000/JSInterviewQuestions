//Shallow copy
let object1={
    name:"Akhil",
    company:"Intel"
}

let object2=object1;
console.log("The values of object2 before modification of shallow copy "+object2.name+" "+object2.company);
object2.name="Pavan";
console.log("The values of object2 after modification of shallow copy "+object2.name+" "+object2.company);
console.log("The values of object1 after modification of shallow copy "+object1.name+" "+object1.company);

//Deep copy

let data1={
    name:"Akhil",
    company:"Jai Kisan"
}

let data2={...data1}
console.log("The values of object2 before modification of deep copy "+data2.name+" "+data2.company);
data2.company="Apple";
console.log("The values of object2 after modification of deep copy "+data2.name+" "+data2.company);
console.log("The values of object1 after modification of deep copy "+data1.name+" "+data1.company);
