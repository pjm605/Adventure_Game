var Connection = require('./connection')

var Node = function(title, text) {
	this.title = title
	this.text = text
	this.connections = []
	this.conditions = {}
}

Node.prototype.connect = function (obj, instruc){
	var instance = new Connection (obj, instruc)
	this.connections.push(instance)
	
	if(this.conditions.hasOwnProperty(instruc))
	{
		throw new Error (instruc + " already exists.")
	}
	else
	{
		this.conditions[instruc] = instance
	}

	


}






module.exports = Node
