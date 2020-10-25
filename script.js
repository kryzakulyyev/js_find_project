/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/

let londonStreetName=["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"]
getLanes = arr =>{
 let lane=[];
  for(let i=0; i<arr.length; i++ ){
    if(arr[i].includes("Lane")) {
      lane.push(arr[i])
    }
  }
  return lane;
}
console.log(getLanes(londonStreetName));