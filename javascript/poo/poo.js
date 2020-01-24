function User(name){
    this.name=name;
    this.email='';
    this.showMe = function(){
        console.log ("Je suis "+ this.name +" mon email est " + this.email);
    };
}
var u= new User('toto');
var u2= new User('Patrick');


u.email = 'ff@yahoo.fr';
u.showMe();


//-------------------------------

var lion = {
    name:'Simba',
    age:1,
    weight:10,
    walk:function(){
    console.log ("Je suis "+ this.name +" marche comme un lion ");
    }
};

console.log(lion.name,lion.age,lion.weight);

lion.walk();


String.prototype.truncate=function(size){
    return this.substr(0,size)+" ...";
};

console.log('toto'.toLocaleLowerCase());
console.log('Bonjour toto'.truncate(6));

//-------------------ES6---------------------//
class Voiture{
    constructor(){
        this.brand='Ferrari';
    }

}
var voiture=new Voiture();
console.log(voiture.brand);