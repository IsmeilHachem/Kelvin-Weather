// Constant Variable holding 293
const kelvin = 293;

// Minus 273 from kelvin to get celcius 
const celsius = kelvin - 273;

// Getting fahrenheit from celcius 
let fahrenheit = celsius * (9/5) + 32;

// round down to nearest int
fahrenheit = Math.floor(fahrenheit);

// Print out temp in F
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);

// Converting celcius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);