class DynamicArray {

  constructor(capacity) {

    this.length = 0;
    this.capacity = capacity;
    this.data = [];
    this.data.length = this.capacity;

  }

  read(index) {
    let counter = -1;
    let value;
    this.data.forEach(element => {
      counter++;
      if (counter == index) {
        value = element;
      }
    });
    return value;
  }

  unshift(val) {
    this.length++;
    if (this.data.length > 0) {
      for (let i=this.data.length - 1; i>=0; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = val;
    } else {
      this.data[0] = val;
    }
  }

}


let dyna










module.exports = DynamicArray;
