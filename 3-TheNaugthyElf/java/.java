/*
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

 * 
 * */


public class TheNaughtyElfo {

	public static void main(String[] args) {
		String original = "abcd";
		String modified = "abcde";
		System.out.println(theNaughtyElfo(original,modified));
		
		String original2 = "stepfor";
		String modified2 = "stepor";
		System.out.println(theNaughtyElfo(original2,modified2));

		String original3 = "abcde";
		String modified3 = "abcde";
		System.out.println(theNaughtyElfo(original3,modified3) == ""?"No hay diferencias":"");

	}
	
	public static String theNaughtyElfo(String original,String modified) {
		char[] originalArray = original.toCharArray();
		char[] modifiedArray = modified.toCharArray();
		int originalLength = originalArray.length;
		int modifiedLength = modifiedArray.length;
		int length = Math.max(originalLength, modifiedLength);

		
		for(int i = 0;i < length;i++) {
			if (originalLength == i) {
				return String.valueOf(modifiedArray[i]);
			}
			if (modifiedLength == i) {
				return String.valueOf(originalArray[i]);
			}
			if(originalArray[i] != modifiedArray[i]) {
				if (originalLength > modifiedLength) {
					return String.valueOf(originalArray[i]);
				}
				return String.valueOf(modifiedArray[i]);
			}
			
		}
		return "";
	}

}
