package algorithms;

public class Algorithms {
  Algorithms(String type) {

  }

  public static void countingSort(int[] data) {
    // get the max value in the data, so we know how large to make the counting
    // array
    int max = getMax(data);

    int[] counting = new int[max + 1];

    // build counting array
    for (int val : data) {
      counting[val]++;
    }

    // sort data
    int pos = 0;
    for (int i = 0; i < data.length; i++) {
      while (pos < counting.length && counting[pos] == 0) {
        pos++;
      }

      data[i] = pos;
      counting[pos]--;
    }
  }

  // overloaded method for char data
  public static void countingSort(char[] data) {

    // 128 ASCII characters
    int[] counting = new int[128];

    for (char val : data) {
      counting[val]++;
    }

    // sort data
    int pos = 0;
    for (int i = 0; i < data.length; i++) {
      while (pos < counting.length && counting[pos] == 0) {
        pos++;
      }

      data[i] = (char) pos;
      counting[pos]--;
    }
  }

  private static int getMax(int[] intData) {
    int max = Integer.MIN_VALUE;

    for (int num : intData) {
      if (num > max)
        max = num;
    }

    return max;
  }

}