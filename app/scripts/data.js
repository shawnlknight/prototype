var joe = new Soldier("joe", "allies");
var hanz = new Soldier("hanz", "axis");
var pistol = new Weapon("pistol", "small", 20);
var grenade = new Weapon("grenade", "small", 30);
var germany = new Battlefield("forest", 10);
var france = new Battlefield("beach", 15);



$(".b1").click(function() {
	this.b1 = germany.element(pistol);
	console.log(this.b1);
});

$(".b2").click(function() {
	this.b2 = france.element(pistol);
	console.log(this.b1);
});

$(".b3").click(function() {
	this.b3 = pistol.fire(joe);
	console.log(this.b3);
	$(".joeLife").text(joe.life);
});

$(".b4").click(function() {
	this.b4 = pistol.fire(hanz);
	console.log(this.b4);
	$(".hanzLife").text(hanz.life);
});












