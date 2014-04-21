var joe = new Soldier("joe", "allies");
var hanz = new Soldier("hanz", "axis");
var pistol = new Weapon("pistol", "small", 20);
var grenade = new Weapon("grenade", "small", 25);
var germany = new Battlefield("forest", 11);
var france = new Battlefield("beach", 13);


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
		if(pistol.damage <= 5); {
			germany.weatherDamage = 0;
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
		if(grenade.damage <= 5); {
			germany.weatherDamage = 0;
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
		if(pistol.damage <= 5); {
			france.weatherDamage = 0;
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
		if(grenade.damage <= 5); {
			france.weatherDamage = 0;
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
				
});
});














