// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calculateNewVelocity = (velocity, acceleration, timeInHours) => {
  // Convert acceleration to km/h^2 and time to hours
  const accelerationInKmPerHourSquared = acceleration * 12960; // (3600^2/1000)
  return velocity + accelerationInKmPerHourSquared * timeInHours;
};

// Convert time to hours
const timeInHours = timeInSeconds / 3600;

// Error handling for negative input parameters or incorrect units of measurement
if (velocity < 0 || acceleration < 0 || timeInHours < 0 || fuelBurnRate < 0) {
  console.error("Invalid input parameters. Please check the provided values.");
  throw new Error("Invalid input parameters.");
}

// Calculate new distance
const newDistance = initialDistance + velocity * timeInHours;

// Calculate remaining fuel
const remainingFuelAfterBurn = initialFuel - fuelBurnRate * timeInSeconds;

// Calculate new velocity
const newVelocity = calculateNewVelocity(velocity, acceleration, timeInHours);

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn} kg`);
