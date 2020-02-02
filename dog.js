function Dog(){
    this.stomach = [];
}

Dog.prototype.eat(cat){
    this.stomach.push(cat);
}

module.exports = Dog;
//sayhello