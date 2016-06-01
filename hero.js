var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
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
  }
};

module.exports = Hero;
