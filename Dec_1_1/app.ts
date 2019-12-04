import { utility } from "../common/utility";

/*
Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/




async function main(){

    let entries = (await utility.readInput('./dec_1_1/input.txt')).map((val)=>{
        let num = +val;
        // divide by 3
        num = num / 3.0;
        num = Math.floor(num); // round down
        num = num -2; // subtract 2
        return +val;
    });
    let sum = entries.reduce((prev,current)=>{
        return prev + current;
    },0);
    console.log(`Answer is ${sum}`);
}


main();

