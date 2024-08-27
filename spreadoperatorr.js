//Concatenation without spread
let arr1=[10,11,12,13];
let arr2=[14,15];
arr1=arr1.concat(arr2);
console.log("The elements of array after Concatenation without spread "+arr1);



//Concatenation with spread



let hello1=[10,11,12,13];
let hello2=[14,15];
hello1=[...hello1,...hello2];
console.log("The elements of array after Concatenation with spread "+hello1);




//Copy without spread(shallow copy)

let how1=[10,11,12,13];
let how2=how1;
how2.push(15);
console.log("The elements of array 2 after Copy without spread "+how2);
console.log("The elements of array1 after Copy without spread "+how1);

//In Shallow Copy arrays memory position is same if element is added to array2 it also added to array1 because they are in same memory reference

//Copy with spread(Deep copy)

let hii1=[10,11,12,13];
let hii2=[...hii1];
hii2.push(15);
console.log("The elements of array2 after Copy with spread "+hii2);
console.log("The elements of array1 after Copy with spread "+hii1);
//In Deep Copy arrays memory position is different if element is added to array2 it is not added to array1
//Expand without spread

let hey1=[10,11,12,13];
let hey2=[hey1,15,14];
console.log("The elements of array after expand without spread "+hey2);


//Expand with spread

let array1=[10,11,12,13];
let array2=[...array1,14,15];
console.log("The elements of array after expand with spread "+array2);









