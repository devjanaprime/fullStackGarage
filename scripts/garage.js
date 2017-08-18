console.log( 'js' );
let garage = [];

let addCar = () => {
  let newCar = new Car( document.getElementById( 'yearIn' ).value,
    document.getElementById( 'makeIn' ).value,
    document.getElementById( 'modelIn' ).value,
    document.getElementById( 'imageUrlIn' ).value,
   );
  garage.push( newCar );
  displayCars();
}; // end add car

let displayCars = () => {
  let outputText = '';
  for( let i=0; i< garage.length; i++ ){
    outputText += '<div><p>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model + '</p>';
    outputText += '<img src="' + garage[i].imageUrl + '"></div>';
  } // end for
  let output = document.getElementById( 'output' );
  output.innerHTML = outputText;
}; //end displayCars

class Car{
  constructor( year, make, model, imageUrl ){
   this.year = year;
   this.make = make;
   this.model = model;
   this.imageUrl = imageUrl;
 }; // end car constructor
}; //end Car class
