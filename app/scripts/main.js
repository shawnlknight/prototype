
function play(index) {
	alert("The setting is WWII. Choose a soldier, weapon, and battlefield.");
};

///////////////////////////////////////=

function Soldier(name, side) {
	this.name = name;
	this.side = side;
	this.life = 100;
}

Soldier.prototype.addDamage = function(weapon) {
	if (this.life <= 0) {
	console.log("dead");
	alert(this.name + " is dead. Game over!");
	}
}


function Weapon(type, size, damage) {
	this.type = type || "fists";
	this.size = size;
	this.damage = damage;

}

Weapon.prototype.fire = function(soldier) {
	console.log("Bam!");
	// alert("fire away!");
	soldier.life = (soldier.life - this.damage);
	soldier.addDamage(this);
}
	

function Battlefield(landType, weatherDamage) {
	this.landType = landType;
	this.weatherDamage = weatherDamage;
}
	
Battlefield.prototype.element = function(weapon) {
	console.log("weapon is damaged!");
	weapon.damage = (weapon.damage - this.weatherDamage);
}







 



