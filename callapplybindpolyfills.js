//Call polyfill
let person={
    firstname:"Kirtesh",
    lastname:"Bansal"
}

let printName=function(country){
    console.log(this.firstname+""+this.lastname+"from"+country);
}

Function.prototype.mycall=function(obj,...args){
    let sym=Symbol();
    obj[sym]=this;
    let res=obj[sym](...args);
    delete obj[sym];
    return res;

}

printName.mycall(person,"India");

//Apply polyfill

let printCountry=function(state,country){
    console.log(this.firstname+""+this.lastname+"from"+state+","+country);
}

Function.prototype.myapply=function(obj,...args){
    let sym=Symbol();
    obj[sym]=this;
    let res=obj[sym](...args[0]);
    delete obj[sym];
    return res;

}

printCountry.myapply(person,["Andhra Pradesh","India"]);

//Bind polyfill
Function.prototype.mybind=function(obj,...args){
    let func=this;
    return function(...args1){
        return func.apply(obj,[...args,...args1]);
    }

}


let myName=printName.mybind(person,"Austraila");
myName();

