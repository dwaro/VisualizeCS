export default {
  'Bubble Sort': {
    description: {
      runtime: 'O(n²)',
      space: 'O(1)',
      details: [
        "Bubble Sort entails moving through an array, and swapping pairs of adjacent elements. First, we compare elements at positions 0 and 1. If element at 0 is greater than the element in position 1, we swap the elements. Next, we compare elements at positions 1 and 2. This continues until the end of the array, and bubble sort requires n - 1 sweeps of the array to guarantee it's sorted. After each sweep, we start at the beginning of the array and repeat the comparisons.",
        'After the first sweep, we are guaranteed the largest element is placed at the end of the array. After the second sweep, we are guaranteed the second largest element is placed second from the end of the array and so on.',
        'Bubble Sort is considered a slow sorting algorithm, suitable only for smaller data sizes. Bubble sort is a stable sorting algorithm.',
      ],
    },
    code: {
      java: `public static void bubbleSort(int[] data) {
  // n - 1 sweeps
  for (int i = 0; i < data.length - 1; i++) {

    // compare adjacent neighbors up to (i - 1) position from the end
    for (int j = 0; j < data.length - 1 - i; j++) {

      // swap values
      if (data[j] > data[j + 1]) {
        int tmp = data[j+1];
        data[j+1] = data[j];
        data[j] = tmp;
      }
    }
  }
}`,
      javascript: `function bubbleSort(data) {
  // n - 1 sweeps
  for (let i = 0; i < data.length - 1; i++) {

    // compare adjacent neighbors up to (i - 1) position from the end
    for (let j = 0; j < data.length - i - 1; j++) {
      
      // swap values
      if (data[j] > data[j + 1]) {
        const tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
}`,
    },
  },
  'Merge Sort': {
    description: {
      runtime: 'O(n log(n))',
      space: 'O(n)',
      details: [
        'The merge sort algorithm recursively splits the array into halves until it is down to n 1-sized arrays. I then merges the arrays back together in sorted order.',
        'This is usually regarded as a superior method to bubble, insertion, and selection sorts. However, it is important to note its space requirements, which could be worrisome for large data. Merge sort is a stable sorting method.',
      ],
    },
    code: {
      java: `Java code to come.`,
      javascript: `JavaScript code to come.`,
    },
  },
  'Selection Sort': {
    description: {
      runtime: 'O(n²)',
      space: 'O(1)',
      details: [
        'An easy way to describe selection sort is that it is sorting the array backwards. In the first pass, we select the largest element and place it at the end of the array. For the second pass, we then find the largest element in the array from index 0 up to second last position of the array, and place it at the second to last position of the array. We repeat this for n - 1 sweeps to guarantee the array is sorted.',
        'On average, selection sort requires less swaps than bubble sort or insertion sort, and generally performs much faster than the two; however, it is still an inefficient sorting algorithm. Also note, that the algorithm can be implemented in reverse, putting the smallest at the beginning of the array and building the array forward.',
      ],
    },
    code: {
      java: `public static void selectionSort(int[] data) {
  // n - 1 sweeps
  for (int i = data.length - 1; i > 0; i--) {
    
    // index of max element in unsorted portion of the array 
    int max = 0;

    // compare if we have a new max
    for (int j = 0; j <= i; j++) {
        if (data[j] > data[max]) {
            max = j;
        }
    }
    
    // swap max element to the end of unsorted array
    if (max != i) {
      int tmp = data[i];
      data[i] = data[max];
      data[max] = tmp;
    }
  }   
}`,
      javascript: `function selectionSort(data) {
  // n - 1 sweeps
  for (let i = data.length - 1; i > 0; i--) {
    
    // index of max element in unsorted portion of the array
    let max = 0;

    // compare if we have a new max
    for (let j = 0; j <= i; j++) {
      if (data[j] > data[max]) {
        max = j;
      }
    }

    // swap if max element isn't already in place.
    if (max !== i) {
      const tmp = data[i];
      data[i] = data[max];
      data[max] = tmp;
    }
  }
}`,
    },
  },
  'Radix Sort': {
    description: {
      runtime:
        'O(k * n) where n is the number of elements and k is the number of digits of the largest number to sort (the number of sweeps needed)',
      space: 'O(n + r) where r is the range of the input',
      details: [
        'Unlike most of the other sorting algorithms, radix sort does not use a comparison based approach, instead, it utilizes integers to sort bits. The idea of this algorithm is to do digit by digit sorting and it utilizes counting sort to do the heavy lifting. One way to implement this is to move from the least significant bit (the 1s place for integers) to the most significant bit.',
        'e.g. Values = [34, 12, 59, 52, 132, 98, 46, 77, 105, 260, 4]',
        '--> 1st pass (sort by 1s place) [260, 12, 52, 132, 34, 4, 105, 46, 77, 98, 59]',
        '--> 2nd pass (sort by 10s place) [105, 4, 12, 132, 34, 46, 52, 59, 260, 77, 98]',
        '--> 3rd pass (sort by 100s place) [4, 12, 34, 46, 52, 59, 77, 98, 105, 132, 260] --> sorted',
      ],
    },
    code: {
      java: `public static void radixSort(int[] values) {
    if (values != null && values.length > 1) {
        int max = getMax(values);

        int maxLength = String.valueOf(max).length();

        radixSort(values, maxLength);
    }
}
    
// Gets the max number in an array of integers.
public static int getMax(int[] values) {
    int max = Integer.MIN_VALUE;

    for (int num: values) {
        if (num > max)
            max = num;
    }

    return max;

}
    
// Overloaded helper method to do the heavy lifting counting sorting for the radix sort.
public static void radixSort(int[] values, int passes) {

    // take a pass for each digit of the max number
    for (int i = 0, divisor = 1; i < passes; i++, divisor *= 10 ) {
        int[] tmp  = new int[values.length];
        int[] counting = new int[10];

        // populate counts
        for (int num: values) {
            counting[ (num / divisor)  % 10 ]++;
        }

        // change counts to actual output positions
        for (int j = 1; j < 10; j++)
            counting[j] += counting[j-1];

        // now update tmp
        for (int j = values.length - 1; j >= 0; j--) {
            tmp[counting[ (values[j] / divisor) % 10 ] - 1] = values[j];
            counting[ (values[j]/divisor) % 10 ]--;
        }

        // copy output from tmp back into values
        for (int z = 0; z < values.length; z++)
            values[z] = tmp[z];
    }
}`,
      javascript: `JavaScript code to come`,
    },
  },
  'Counting Sort': {
    description: {
      runtime: 'O(n + c)',
      space: 'O(n + c)',
      details: [
        'Counting sort is a sorting algorithm that uses key counts for a discrete range of data. Unlike other sorting algorithms, counting sort is not comparison based. This algorithm serves as a helper or sub-routine in the Radix sort algorithm. This algorithm is good for input data with a relatively small range of values.',
        "For example, if we wanted to sort a list of peoples' ages, we know that we could reasonably capture all ages by assuming every age is less than 150. That means, we only need a counting sort array c, of size 150. The trick is to hold a count at each array index (the key) that corresponds to a value. So if we had a list of ages [ 15, 26, 17, 90, 67, 20, 15 ], our counting sort array would contain a 1 at indexes 26, 17, 90, 67, and 20, and a 2 at 15 to correlate to the counts in the array. Lastly we just iterate back over our counting array (which is in order) to build our output.",
        'The pseudo code for this algorithm is quite simple containing two steps: 1. iterate over data, counting each value and storing it in our counting array. 2. Iterate over the counting array and build our sorted output.',
        'Counting sort can be a speedy algorithm with the right conditions. Its application is unique and is only really applicable for numbers that are constrained to a small range or for characters. Counting sort should not be used for data which contains strings with lengths > 1.',
      ],
    },
    code: {
      java: 'Java code for Counting Sort to come!',
      javascript: `function countingSort(data) {
  let counts = [];
  const isNumber = typeof data[0] === 'number';

  // build the counts array
  if (isNumber) {
    // numeric data
    for (let val of data) {
      if (counts[val] === undefined) counts[val] = 1;
      else counts[val]++;
    }
  } else {
    // character / string data
    for (let val of data) {
      if (counts[val.charCodeAt(0)] === undefined)
        counts[val.charCodeAt(0)] = 1;
      else counts[val.charCodeAt(0)]++;
    }
  }

  let result = []; // output
  let pos = 0; // position in counts array

  // build the sorted results array
  for (let i = 0; i < data.length; i++) {
    // increase position until we find the next sorted value
    while (counts[pos] === undefined || counts[pos] === 0) {
      pos++;
    }

    if (isNumber) result.push(pos);
    else result.push(String.fromCharCode(pos));

    counts[pos]--; // decrease count at this position
  }

  return result;
}`,
    },
  },
};
