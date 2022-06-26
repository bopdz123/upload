// function Dog(name, age, breed, gender, color, food) {
//   this.name = name;
//   this.age = age;
//   this.breed = breed;
//   this.gender = gender;
//   this.color = color;
//   this["food"] = food;

//   this.legs = 4;
//   this.species = "mammal";
//   this.ears = 2;
//   this.eyes = 2;
//   this.isCrazy = false;
// }
// Dog.prototype.eat = function () {};

// const Linh = new Dog("Linh", 17, "chihuahua", "female", "red", "bún đậu");
// console.log(Linh);

// Linh.legs--;

// console.log(Linh);

// Linh.eat();

// Linh.eat = function () {
//   console.log(`${this.name} khong an theo 1 cach binh thuong `);
// };

// function Weapon(type, damage, speed) {
//   this.type = type;
//   this.damage = damage;
//   this.speed = speed;
// }
// Weapon.prototype.speed = function (Weapon) {
//   console.log(`${this.speed} run faster than ${Weapon.speed}`);
// };
// function Character(name, level, health) {
//   this.name = name;
//   this.level = level;
//   this.health = health;
// }
// Character.prototype.attack = function (Character) {
//   console.log(`${this.name} attack ${Character.name}`);
// };
// let knife = new Weapon("short", "50%", "20%");
// let gun = new Weapon("mp4", "80%", "100%");
// let stick = new Weapon("wood", "10%", "10%");

// const Linh = new Character("Linh", "20", "normal");
// const Nhi = new Character("Nhi", "30", "good");

// Linh.attack(Nhi);
// gun.speed(knife);

