function cyberReindeer(road, time) {
  let actualPosition = 0,
    roadArray = road.split(""),
    result = [road],
    asterisk = false;
  
  for(let actualTime = 1;actualTime < time;actualTime++){
    if(actualTime === 5){
      road = road.replaceAll("|","*");
      roadArray = road.split("");
    }
    if(roadArray[actualPosition + 1] === "."){
      if(asterisk){
        roadArray[actualPosition] = "*";
        roadArray[actualPosition + 1] = "S";
        road = roadArray.join("");
      } else {
        roadArray[actualPosition] = ".";
        roadArray[actualPosition + 1] = "S";
        road = roadArray.join("");
      }
      asterisk = false;
      actualPosition++;
    } else if(roadArray[actualPosition + 1] === "*"){
      if(asterisk){
        roadArray[actualPosition] = "*";
        roadArray[actualPosition + 1] = "S";
        road = roadArray.join("");
      } else {
        roadArray[actualPosition] = ".";
        roadArray[actualPosition + 1] = "S";
        road = roadArray.join("");
      }
      asterisk = true;
      actualPosition++;
    }
    result.push(road);
  }
  return result;
} 

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time);

console.log(result);