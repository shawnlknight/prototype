
// function play(index) {
// 	prompt("Do you want to play? (yes/no)");
// };

/////////////

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
	this.fire = function(target) {
		console.log("Bam!");
		// alert("fire away!");
			target.life = (target.life - this.damage);
		}
	};
	this.addWeatherDamage = function(weather) {
		if (this.damage <= 0) {
			console.log("useless");
		}
	};


function Battlefield(landType, weatherDamage) {
	this.landType = landType;
	this.weatherDamage = weatherDamage;
	this.element = function(target) {
		console.log("damage!");
			target.damage = (target.damage - weatherDamage);
	};

}


var joe = new Soldier("joe", "allies");
var hanz = new Soldier("hanz", "axis");
var pistol = new Weapon("pistol", "small", 15);
var grenade = new Weapon("grenade", "small", 25);
var tank = new Weapon("tank", "large", 40);
var germany = new Battlefield("forest", 5);
var africa = new Battlefield("desert", 10);
 



