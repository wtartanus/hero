var Rat = function(name, poisonValue, health) {
  this.name = name;
  this.poisonValue = poisonValue;
  this.health = health;
};

Rat.prototype = {
  poison: function(food) {
    food.isPoisoned = true;
    food.healthValue = this.poisonValue;
  }
};

module.exports = Rat;

//Adding loot array that randomly assigns objects to rat.  Hero can search dead rat and take loot.
