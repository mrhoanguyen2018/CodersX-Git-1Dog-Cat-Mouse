var Dog = require('./Dog');
var Mouse = require('./mouse');
var Cat = require('./cat');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

var dog = new Dog('Tom');
// cat.eat(mouse);

try{
    cat.eat(dog);
}
catch{
    console.log('Error: Cat cant eat Dog!!!');
}

console.log(cat);

dog.sayHi();