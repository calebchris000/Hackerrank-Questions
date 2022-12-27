


function Animal() { }
Animal.prototype.eat = function () {
    return ("Crunch")
}

function Dog(){}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.eat = function(){
    return "YAM YAM YAM"
}

let beavel = new Dog();



(function(){
    console.log("HELLO")
})()