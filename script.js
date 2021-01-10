let celcius;

const convert = () => {
 celcius = document.getElementById('celcius').value;
 let fahrenheit = (celcius * 9/5) + 32; 
 document.getElementById('fahrenheit').innerHTML = `Fahrenheit is ${fahrenheit}`;
}