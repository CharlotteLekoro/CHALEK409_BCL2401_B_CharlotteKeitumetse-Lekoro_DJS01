/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

calculateNewVelocity = (velocity, acceleration, timeInHours) => { 
  return velocity + (acceleration*timeInHours)
}
// Convert time to hours
const timeInHours = timeInSeconds / 3600;

const newDistance = initialDistance + (velocity*timeInHours) //calcultes new distance
const remainingFuelAfterBurn = remainingFuel - (fuelBurnRate * timeInHours); //calculates remaining fuel
const newVelocity = calculateNewVelocity(velocity, acceleration, timeInHours) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn} kg`);






