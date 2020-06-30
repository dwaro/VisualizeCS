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
      java: `public static void bubbleSort(int[] values) {
    // n - 1 sweeps
    for (int i = 0; i < values.length - 1; i++) {

        // compare adjacent neighbors up to (i - 1) position from the end
        for (int j = 0; j < values.length - 1 - i; j++) {

            // swap values
            if (values[j] > values[j + 1]) {
                int tmp = values[j+1];
                values[j+1] = values[j];
                values[j] = tmp;
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
};`,
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
    code: ``,
  },
  'Selection Sort': {
    description: {
      runtime: 'O(n²)',
      space: 'O(1)',
      details: [
        'An easy way to describe selection sort is that it is sorting the array backwards. In the first pass, we select the largest element and place it at the end of the array. For the second pass, we then find the largest element in the array from index 0 up to second last position of the array, and place it at the second to last position of the array. We repeat this for n - 1 sweeps to guarantee the array is sorted.',
        'On average, selection sort requires less swaps than bubble sort or insertion sort; however, it is still an inefficient sorting algorithm. Also note, that the algorithm can be implemented in reverse, putting the smallest at the beginning of the array and building the array forward.',
      ],
    },
    code: `public static void selectionSort(int[] values) {
    // n - 1 sweeps
    for (int i = 0; i < values.length - 1; i++) {
        
        // index of max element in unsorted portion of the array 
        int max = 0;

        // compare if we have a new max
        for (int j = 0; j < values.length - 1 - i; j++) {
            if (values[j] > values[max]) {
                max = j;
            }
        }
        
        // swap max element to the end of unsorted array
        int tmp = values[values.length - 1 - i];
        values[values.length - 1 - i] = values[max];
        values[max] = tmp;
    }   
}`,
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
    code: `public static void radixSort(int[] values) {
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
  },
};
