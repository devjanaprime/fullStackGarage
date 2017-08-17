console.log( 'js' );
let garage = [];

let addCar = () => {
  let newCar = new Car( document.getElementById( 'yearIn' ).value,
    document.getElementById( 'makeIn' ).value,
    document.getElementById( 'modelIn' ).value);
  garage.push( newCar );
}; // end add car

class Car{
  constructor( year, make, model ){
   this.year = year;
   this.make = make;
   this.model = model;
 }; // end car constructor
}; //end Car class
