//1)
class Duck {
	/*The parameters use a default value of 'null' if the user doesn't
	specify the parameter. 'next' will never be entered by the user.*/
  constructor(name = null, next = null) {
    this.name = name;
    this.next = next;

  }
  getNext() {
    return this.next;
  }
  quack() {
    return "Quack";
  }
}
class Zoo {
	/* Creates an empty list of ducks to be filled later.*/
  constructor(ducks = null) {
    this.ducks = ducks;
  }

  /* Adds a new Duck object to the linked list of ducks. If there is
  already an duck in the list, the new duck will become the previous
  duck's 'this.next'.*/
  addDuck(name) {
    var newDuck = new Duck(name);
    if (this.ducks) {
      var head = this.ducks;
      var current = head;
      while (true) {
        if (current.next) {
          var previous = current;
          current = current.next;
        } 
        else {
          break;
        }
      }
      current.next = newDuck;
    } 
    else {
      this.ducks = newDuck;
    }
  }
  /* Checks to see if there are any ducks in the list first. If there
  are, then it will call the quack() method for each duck. Once the
  the last duck has 'quacked', it exits the function.*/
  allQuack() {
    var current = this.ducks;
    var quack = true;
    if (current === null) {
      console.log("No ducks in the zoo. :(");
    } 
    else {
      while (quack) {
        console.log(current.quack());
        if (current.getNext()) {
          current = current.getNext();
        } 
        else {
          break;
        }
      }
    }
  }

}

//2)
class Car{
	/*
	color as string
	miles as integer
	convertible as boolean
	owners as integer
	model as string*/
	constructor(color, miles, convertible, owners, model){
		this.color= color;
		this.miles = miles;
		this.convertible = convertible;
		this.owners = owners;
		this.model = model;
	}
}

class UsedCars{
	/* contains all cars added*/
	constructor(){
		this.carLot = [];
	}
		/* Adds car to 'this.carLot' array */
	addCar(color, miles, convertible, owners, model){
		var newCar = new Car(color, miles, convertible, owners, model);
		this.carLot.push(newCar);
	}
	/* Searches through every index in 'this.carLot' to see if it meets
	the criteria set by the user. If all the criteria is true, it is
	pushed into the 'showCars' array; that array is then returned to the
	user.*/
	worthALook(convertible, miles, owners){
		var showCars = [];
		for(var j in this.carLot){
			if(this.carLot[j].convertible && this.carLot[j].miles < 150000 && this.carLot[j].owners < 2){
				showCars.push(this.carLot[j])
			}
		}
		return showCars
	}
}