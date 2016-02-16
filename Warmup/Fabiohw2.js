function Bicycle(type, color, tires, sexiness, size, brakes, pedals, repair) {
  this.type = type;
  this.color = color;
  this.tires = tires;
  this.sexiness = sexiness;
  this.size = size;
  this.brakes = function(speed){
    if (speed < 2){
    return "go faster";
    } else {
    return "apply brakes";
    }
  }
  this.pedals = function(speed){
    if (speed < 2){
      return "apply pedals";
    } else {
      return "slow down";
    }
  }
  this.repair = function(wear){
    if (wear > 2){
      return "take it to the bike shop";
    } else {
      return "stay thirsty, my friend";
    }
  }

};

var trek = new Bicycle("touring", "grey", 700, true, 60);
console.log(trek.repair(1));
var Clock = {
  time: "military",
  color: "white",
  shape: "round",
  clockMessage: function(){
    return "It is a freckle past a hair ";
  },
  clockTime: function(time){
    return "No, seriously, it is " + time + " O'clock."
  },
  ClockSpeed: function(time){
    if (time > 4){
      return "Time goes much faster now";
    } else {
    return "Time moves very slowly";
  }
  }
}



var AppleWatch = Object.create(Clock);
console.log(AppleWatch.clockTime(5));
