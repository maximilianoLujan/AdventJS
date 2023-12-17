/**
 * 
 * In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []

 */
function manufacture(gifts, materials) {
    const result = [];
  
    for (const gift of gifts) {
      const giftMaterials = new Set(gift);
      // Check if all materials for the gift are present
      if ([...giftMaterials].every(material => materials.includes(material))) {
        result.push(gift);
      }
    }
  
    return result;
}
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const result = manufacture(gifts, materials) 
console.log(result);

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

const result2 = manufacture(gifts2, materials2) // ["puzzle"]
console.log(result2)

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

const result3 = manufacture(gifts3, materials3) // []
console.log(result3)