var joe = new Soldier("joe", "allies");
var hanz = new Soldier("hanz", "axis");
var pistol = new Weapon("pistol", "small", 30);
var grenade = new Weapon("grenade", "small", 35);
var germany = new Battlefield("forest", 2);
var france = new Battlefield("beach", 3);


$(document).ready(function() {

$("form").submit(function(e) {
	e.preventDefault();
	console.log("hey I'm a button");



var field = $(".fieldSelect").val();
var weapon = $(".weaponSelect").val();
var soldier = $(".soldierSelect").val();

if(field === "germany") {
	if(weapon === "pistol") {
		germany.element(pistol);
		if(pistol.damage <= 10); {
			germany.weatherDamage === 0;
		if(soldier === "joe") {
			pistol.fire(hanz);
			$(".something").text("Hanz's life " + hanz.life);
			} else if(soldier === "hanz") {
				pistol.fire(joe);
				$(".something").text("Joe's life " + joe.life);
			}
		}
	}
}
if(field === "germany") {
	if(weapon === "grenade") {
		germany.element(grenade);
		if(grenade.damage <= 10); {
			germany.weatherDamage === 0;
		if(soldier === "joe") {
			grenade.fire(hanz);
			$(".something").text("Hanz's life " + hanz.life);
			} else if(soldier === "hanz") {
				grenade.fire(joe);
				$(".something").text("Joe's life " + joe.life);
			}
		}
	}
}
if(field === "france") {
	if(weapon === "pistol") {
		france.element(pistol);
		if(pistol.damage <= 10); {
			france.weatherDamage === 0;
		if(soldier === "joe") {
			pistol.fire(hanz);
			$(".something").text("Hanz's life " + hanz.life);
			} else if(soldier === "hanz") {
				pistol.fire(joe);
				$(".something").text("Joe's life " + joe.life);
			}
		}
	}
}
if(field === "france") {
	if(weapon === "grenade") {
		france.element(grenade);
		if(grenade.damage <= 10); {
			france.weatherDamage === 0;
		if(soldier === "joe") {
			grenade.fire(hanz);
			$(".something").text("Hanz life " + hanz.life);
			} else if(soldier === "hanz") {
				grenade.fire(joe);
				$(".something").text("Joe life " + joe.life);
			}
		}
	}
}
				


		
	







});







});














