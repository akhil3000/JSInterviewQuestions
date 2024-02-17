//Shallow Copy
let arr1=[9,90,80];
let arr2=arr1;
console.log("The values of arrary2 before modification of shallow copy"+arr2);
arr2[1]=50;
console.log("The values of array2 after modification of shallow copy"+arr2);
console.log("The values of array1 after modification of shallow copy"+arr1);

//Deep copy
let hello1=[10,20,30];
let hello2=[...hello1];
console.log("The values of arrary2 before modification of Deep copy"+hello2);
hello2[1]=50;
console.log("The values of array2 after modification of Deep copy"+hello2);
console.log("The values of array1 after modification of Deep copy"+hello1);
