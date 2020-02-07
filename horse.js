function Horse(){
    
}

Horse.prototype.run = function(){
    Console.log('Running....');
}

Horse.prototype.jump = function(){
    Console.log('Jumped....');
}

module.exports = Horse;