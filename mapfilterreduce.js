//Map Method
let arr1=[10,11,12];
let result1=arr1.map(function(item){
    return item+2;
})
console.log("The elements of array after map method "+result1);
//Map Polyfill
Array.prototype.myMap=function(callback){
let temp=[];
    for(let i=0;i<this.length;i++){
       temp.push(callback(this[i],i,this));   
    }    
     return temp;
};   
const nums=[1,2,3,4];
const multiply=nums.myMap((x)=>{
   return x*2;
})
console.log(multiply);

//Filter Method
let arr2=[10,12,14,15,17];
let result2=arr2.filter(function(item){
    return item%2==0;
})
console.log("The elements of array after filter method "+result2);


//Filter Polyfill
Array.prototype.myFilter=function(callback){
let temp=[];
    for(let i=0;i<this.length;i++){
     if(callback(this[i],i,this)){

        temp.push(this[i]);
     }     
return temp;
    }
};    
const nums=[1,2,3,4];
const Filterodd=nums.myFilter((x)=>{
  return x%2;  
})
console.log(Filterodd);

//Reduce Method
let arr3=[10,15,20];
let result3=arr3.reduce(function(item,acc)
{
      acc=acc+item;
      return acc;
})
console.log("The elements of array after reduce method "+result3);
//Reduce Polyfill
Array.prototype.myReduce=function(callback,initial_value){
 var acc=initial_value;
 for(let i=0;i<this.length;i++)
  {
      acc=acc?callback(acc,this[i],i,this):this[i];   
  
  }

  return acc;  
}
const nums=[1,2,3,4];
const sum=nums.myReduce((acc,curr,i,nums)=>{
   return acc+curr;
},0);
console.log(sum);


