var Hero = function(name, health, favouriteFood,strength) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.strength = strength;
};

Hero.prototype = {
  talk: function() {
    return ("I am " + this.name );
  },
  eat: function(food) {
    if ( food.isPoisoned === true ) {
      this.health -= food.healthValue;
    }
    else
      { if (food.name === this.favouriteFood) {
        this.health += ( food.healthValue * 1.5 );
      }
      else {
        this.health += food.healthValue;
      }
    }
  },
 attack: function(enemy) {
   if ( enemy.health < this.strength) {
     enemy.health = 0;
     enemy.poisonValue = 0;
   }
   else {
     enemy.health -= this.strength;
   }
 }
};

module.exports = Hero;
