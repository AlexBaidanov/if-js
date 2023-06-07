(() => {
  function sum() {
    const numA = Math.random() * 10 + 1;
    const numB = Math.random() * 10 + 1;

    return function () {
      return numA + numB;
    };
  }

  console.log(sum()());
})();