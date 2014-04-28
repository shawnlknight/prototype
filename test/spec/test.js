/* global describe, it */

(function () {
    'use strict';

    // describe('Give it some context', function () {
    //     describe('maybe a bit more context here', function () {
    //         it('should run here few assertions', function () {

    //         });
    //     });
    // });

 	describe("Soldier", function() {
 		describe("constructor", function() {
 			it("should set soldier's name, side, and life", function() {
 				var soldier = new Soldier("bob", "allies");
 				expect(soldier.name).to.equal("bob");
 				expect(soldier.side).to.equal("allies");
 				expect(soldier.life).to.equal(100);
 			});
 		});

 		describe("addDamage", function() {
 			it("should expect to take life from Soldier", function() {
 				var nonDefaultWeapon = new Weapon("cannon", "large", 20);
 				expect(nonDefaultWeapon.damage).to.equal(20);
 			});
 		});
 	});

 	describe("Weapon", function() {
 		describe("constructor", function() {
 			it("should have default type", function() {
 				var weapon = new Weapon();
 				expect(weapon.type).to.equal("fists");
 			});
 			it("should set weapon type", function() {
 				var weapon = new Weapon("pistol");
 				expect(weapon.type).to.equal("pistol");
 			});
 		});
 	});

 	describe("Battlefield", function() {
 		it("should set battlefield land type and element damage", function() {
 			var someField = new Battlefield("rocky", 10);
 			expect(someField.landType).to.equal("rocky");
 			expect(someField.weatherDamage).to.equal(10);
 		});
 	});




})();

