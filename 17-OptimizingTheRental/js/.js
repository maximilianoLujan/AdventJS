/**
 * In Rovaniemi, Finland 🇫🇮, sleds 🛷 are rented by time intervals. 
 * Each interval is represented as an array of two elements, where the first element 
 * is the start of the rental and the second one is the end.

For example, the array [2, 7] represents a rental that begins at hour 2 and ends at hour 7. 
The problem is that sometimes the intervals overlap with each other, making it confusing to 
figure out from what time to what time the sled was rented.

We're asked to, in order to simplify the task of calculating the total rental time, 
write a function that merges all overlapping intervals and returns an array of sorted intervals:

optimizeIntervals([[5, 8],[2, 7],[3, 4]]) // [[2, 8]]
optimizeIntervals([[1, 3],[8, 10],[2, 6]]) // [[1, 6], [8, 10]]
optimizeIntervals([[3, 4],[1, 2],[5, 6]]) // [[1, 2], [3, 4], [5, 6]]

 */

function optimizeIntervals(intervals) {
  // Ordeno los intervalos por el tiempo de inicio
  intervals.sort((a, b) => a[0] - b[0]);
  
  let mergedIntervals = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
  
  if (currentInterval[0] <= lastMergedInterval[1]) {
    // Hay solapamiento, fusionar los intervalos
    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // No se solapan, agregar el intervalo actual a la lista fusionada
      mergedIntervals.push(currentInterval);
    }
  }
  
    return mergedIntervals;
}


console.log(optimizeIntervals([[5, 8],[2, 7],[3, 4]])) // [[2, 8]]
console.log(optimizeIntervals([[1, 3],[8, 10],[2, 6]])) // [[1, 6], [8, 10]]
console.log(optimizeIntervals([[3, 4],[1, 2],[5, 6]])) // [[1, 2], [3, 4], [5, 6]]