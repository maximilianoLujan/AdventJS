import java.util.*;
/*
 * const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
 * */
public class TheReindeerOnTrial {

	public static void main(String[] args) {
		String movements = ">>*<";
		int result = maxDistance(movements);
		System.out.println(result);
		
		String movements2 = "<<<>";
		int result2 = maxDistance(movements2);
		System.out.println(result2);
		
		String movements3 = ">***>";
		int result3 = maxDistance(movements3);
		System.out.println(result3);

	}
	
	public static int maxDistance(String movements) {
		String[] movementsArray = movements.split("");
		List<String> mov = Arrays.asList(movementsArray);
		int movementsToRight = Collections.frequency(mov, ">");
		int movementsToLeft = Collections.frequency(mov, "<");
		int movementsForward = Collections.frequency(mov, "*");
		int movementsMax = movementsForward;
		
		if (movementsToRight > movementsToLeft) {
			movementsMax += movementsToRight - movementsToLeft;
		} else {
			movementsMax += movementsToLeft - movementsToRight;
		}
		
		return movementsMax;
	}

}