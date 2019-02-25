var Bee = function() {
  Grub.call(this); //this refers to Object.create(Grub.prototype)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee; //want the constructor to point back to its own function;







