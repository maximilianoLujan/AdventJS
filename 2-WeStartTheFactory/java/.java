import java.util.*;
/*
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

 * */
public class WeStartTheFactory {
	public static void main(String[] args) {
		String materials = "tronesa";
		List<String> gifts = new ArrayList<String>();
		gifts.add("tren");
		gifts.add("oso");
		gifts.add("pelota");
		List<String> result = weStartTheFactory(gifts,materials);
		System.out.println(result);
		
		String materials2 = "jlepuz";
		List<String> gifts2 = new ArrayList<String>();
		gifts2.add("juego");
		gifts2.add("puzzle");
		List<String> result2 = weStartTheFactory(gifts2,materials2);
		System.out.println(result2);
		
		String materials3 = "psli";
		List<String> gifts3 = new ArrayList<String>();
		gifts2.add("libro");
		gifts2.add("ps5");
		List<String> result3 = weStartTheFactory(gifts3,materials3);
		System.out.println(result3);
		
		
	}
	
	public static List<String> weStartTheFactory(List<String> gifts,String materials) {
		List<String> result = new ArrayList<String>();
		char[] charArray = materials.toCharArray();
		
		for(int i = 0; i < gifts.size();i++) {
			String gift = gifts.get(i);
			boolean posible = true;
			char[] giftArray = gift.toCharArray();
			for(char ch : giftArray) {
				if(!materials.contains(String.valueOf(ch))) {
					posible = false;
				}
			}
			if (posible) {
				result.add(gift);
			}
		}
		
		return result;
	}
}
