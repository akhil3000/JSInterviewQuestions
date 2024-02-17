//Map Method
let arr1=[10,11,12];
let result1=arr1.map(function(item){
    return item+2;
})
console.log("The elements of array after map method "+result1);


//Filter Method
let arr2=[10,12,14,15,17];
let result2=arr2.filter(function(item){
    return item%2==0;
})
console.log("The elements of array after filter method "+result2);


//Reduce Method
let arr3=[10,15,20];
let result3=arr3.reduce(function(item,acc)
{
      acc=acc+item;
      return acc;
})
console.log("The elements of array after reduce method "+result3);
