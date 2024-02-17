let hello={
    firstname:"Akshay",
    lastname:"Saini"
}

let printFullName=function(hometown,state){
    console.log(this.firstname+""+this.lastname+"from"+hometown+","+state);
}

printFullName.call(hello,"Dehradun","Uttarakhand");


let hello2={
    firstname:"Sachin",
    lastname:"Tendulkar"
}

printFullName.apply(hello2,["Mumbai","Maharasthra"]);

let hello3={
    firstname:"Rahul",
    lastname:"Dravid"
}

let printMyName=printFullName.bind(hello3,"Bangalore","Karnataka");
printMyName();