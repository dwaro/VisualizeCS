export default {
  'Bubble Sort': {
    description: {
      runtime: 'O(n²)',
      space: 'O(1)',
      details: [
        "Bubble Sort entails moving through an array, and swapping pairs of adjacent elements. First, we compare elements. at positions 0 and 1. If element at 0 is greater than the element in position 1, we swap the elements. Next, we compare elements at positions 1 and 2. This continues until the end of the array, and bubble sort requires n sweeps of the array to guarantee it's sorted. After each sweep, we start at the beginning of the array and repeat the comparisons.",
        'After the first sweep, we are guaranteed the largest element is placed at the end of the array. After the second sweep, we are guaranteed the second largest element is placed second from the end of the array and so on.',
        'Bubble Sort is considered a slow sorting algorithm, suitable only for smaller data sizes. Bubble sort is a stable sorting algorithm.',
      ],
    },
    code: `
    public static void bubbleSort(int[] values) {
        // n sweeps
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
    }
    `,
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
  },
};
