import java.util.*;
/*
 * In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

 * */
public class FirstGiftReapeted {

	public static void main(String[] args) {
		List<Integer> regalos = new ArrayList<Integer>();
		
		regalos.add(100);
		regalos.add(3);
		regalos.add(4);
		regalos.add(5);
		regalos.add(0);
		regalos.add(12);
		regalos.add(15);
		regalos.add(14);
		regalos.add(7);
		
		int salida = firstReapetedGift(regalos);
		System.out.println(salida);
		
	}
	
	public static int firstReapetedGift(List<Integer> regalos) {
		List<Integer> regalosUnicos = new ArrayList<Integer>();
		
		for (int i = 0; i < regalos.size() - 1;i++) {
			int regalo = regalos.get(i);
			if(!regalosUnicos.contains(regalo)) {
				regalosUnicos.add(regalo);
			}else {
				return regalo;
			}
		}
		return -1;
	}

}
