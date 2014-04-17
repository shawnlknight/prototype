
function play(index) {
	alert("The setting is WWII. Choose a soldier, weapon, and battlefield.");
};

///////////////////////////////////////

function Soldier(name, side) {
	this.name = name;
	this.side = side;
	this.life = 100;
	this.addDamage = function(weapon) {
		if (this.life <= 0) {
			console.log("dead");
			alert(this.name + " is dead. Game over!");
		}
	};
}

function Weapon(type, size, damage) {
	this.type = type || "fists";
	this.size = size;
	this.damage = damage;
	this.fire = function(soldier) {
		console.log("Bam!");
		// alert("fire away!");
			soldier.life = (soldier.life - this.damage);
			soldier.addDamage(this);
		}
	};


function Battlefield(landType, weatherDamage) {
	this.landType = landType;
	this.weatherDamage = weatherDamage;
	this.element = function(weapon) {
		console.log("damage!");
			weapon.damage = (weapon.damage - weatherDamage);
	}
};


var joe = new Soldier("joe", "allies");
var hanz = new Soldier("hanz", "axis");
var pistol = new Weapon("pistol", "small", 20);
var grenade = new Weapon("grenade", "small", 30);
var tank = new Weapon("tank", "large", 40);
var germany = new Battlefield("forest", 5);
var france = new Battlefield("beach", 10);
var egypt= new Battlefield("desert", 15);


 



