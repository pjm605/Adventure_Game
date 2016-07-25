var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
	
}
Game.prototype.addNode = function (v1, v2) {

	var node = new Node (v1, v2)
		
	if(this.nodes.hasOwnProperty(v1))
	{
		throw new Error
	}
	else
	{
		this.nodes[v1] = node
	}
	
	if(!this.startingPoint)
	{
		this.startingPoint = node
	}

	return node
	
}

Game.prototype.getNode = function(name){
	return this.nodes[name];
}
Game.prototype.connect = function(source, dest, cond){
	this.nodes[source].connect(this.nodes[dest],cond)
}

module.exports = Game
