import $ from 'jquery';

const array = [4,5,3,3,6,788,4,22,4,1];

class Sort {
  constructor() {
    console.log(this.sort(array));
    console.log(this.sort2());
  }

  private sort(arr: number[]): number[] {
    let tmp;

    for(let i = 0; i < arr.length; i++) {
      
      if (tmp > arr[i]) {
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }

      tmp = arr[i];
    }

    return arr;
  }

  private sort2() {
    let count = 0;
    let arr = array;
    while(count < array.length) {
      arr = this.sort(arr);
      count++;
    }

    return arr;
  }
}

$(() => new Sort());