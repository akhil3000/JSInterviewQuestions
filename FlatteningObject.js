const obj={
   newObj:{
       obj2:{
         obj5:{
            one:1,
            two:2
         },
       },
   },
  obj3:{
    obj4:{
       two:2
    }
  }
}

#sample output
/*{
   /newObj.obj2.obj5.one:1,
   /newObj.obj2.obj5.two:2,
   /obj3.obj4.two:2

}*/



Source Code

const flatten=(obj,parentkey="",result={})=>{
for(const key in obj){
 const newkey=parentkey?/${parentkey}.${key}/:key;
  const currobj=obj[key];
  if(typeof currobj==='object' && currobj!=null&&!Array.isArray(currObj)){
    flatten(currobj,newkey,result);
  }
  else{
     result[newkey]=obj[key];
  } 

}
  return result
}
      
