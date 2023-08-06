const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  counters: {},
  [Symbol.iterator]() {
    return this;
  },
  next(id) {
    if (this.counters[id] === undefined) {
      this.counters[id] = 0;
    }
    const value = this.data[this.counters[id]++];
    if (this.counters[id] >= this.data.length) {
      this.counters[id] = 0;
    }
    return {
      done: false,
      value,
    };
  },
};

const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

text1.addEventListener('click', changeStyle('text1'));
text2.addEventListener('click', changeStyle('text2'));
text3.addEventListener('click', changeStyle('text3'));
