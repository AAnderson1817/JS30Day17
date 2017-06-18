const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
  //We need to use regex to isolate any instance of "a" "the" and/or "an", then remove those from the name for sorting purposes inside the sort function only. We don't want to modify the data array.
  return bandName.replace(/^(a |the |an )/i)
}
//We can still compare strings with < or > because the alphabet is alphabetized. Here we use a turnery operator and utilize the implicit return, which is why we don't have curly brackets after our function, nor the return statement.
const sortedBands = bands.sort((a,b)=> strip(a) > strip(b) ? 1 : -1);

//Now we need to map over every item in the bands array and morph it into a list item. Then we join them to remove extraneous commas.
document.querySelector('#bands').innerHTML= sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
