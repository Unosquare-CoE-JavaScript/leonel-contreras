setTimeout(() => {
  console.log('######### High Operation#############')

  const massiveProcess = function (num) {
    const promise = new Promise((resolve, reject) => {
      let result = 0;

      setTimeout(() => {
        for (let i = num ** 7; i >= 0; i--) {
          result += Math.atan(i) * Math.tan(i);
        };
  
        resolve(result);
      }, 0)
    })

    return promise
  };

  massiveProcess(1)
    .then((result => {
      console.log("The number is: " + result);
    }))

  //More processing later on
  console.log('Processing --->', 5 * 5 + 100);
}, 14000)