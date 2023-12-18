/**
 * In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

 */



function findNaughtyStep(original, modified) {
    const originalArray = original.split(""),
        modifiedArray = modified.split(""),
        originalLength = originalArray.length,
        modifiedLength = modifiedArray.length,
        length = Math.max(originalLength,modifiedLength);


    for(let i = 0;i < length;i++){
        const stepOriginal = originalArray[i],
        stepModified = modifiedArray[i];
        if(stepOriginal != stepModified){
            if(originalLength > modifiedLength){
                return stepOriginal
            }
            return stepModified
        }
    }
    return '';
}

const original = 'abcd';
const modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''