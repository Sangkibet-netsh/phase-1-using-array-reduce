const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const batteries = [  { type: 'AA', count: 12 },  { type: 'AAA', count: 8 },  { type: 'C', count: 6 },  { type: 'D', count: 5 },];

// Define a reducer function to calculate the total number of batteries
// const reducer = (accumulator, currentValue) => accumulator + currentValue.count;

// // Call the reduce function on the batteries array to get the total number of batteries
// const totalBatteries = batteryBatches.reduce(reducer, 0);

const reducer = (accumulator, item) =>{
    let totalBatteries = item
   return  accumulator += totalBatteries;
}
let totalBatteries = batteryBatches.reduce(reducer,0)