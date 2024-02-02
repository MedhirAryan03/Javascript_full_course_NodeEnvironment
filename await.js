/*In JavaScript, when used within an async function, await is used 
to pause the execution of the function until 
the Promise is resolved. It is commonly used with asynchronous 
functions that return Promises 
to wait for the completion of the Promise before moving on to the next line of code */

//Taking the example before

async function play(callback) {
    console.log("Process 1");
    await new Promise((resolve) => {
      setTimeout(function () {
        for (let it = 2; it <= 9; it++) {
          console.log("Process " + it);
        }
        resolve(); 
        console.log("Process 10");
        callback();
      }, 3000);
    });
  }
  
  play(() => {
    console.log("Notice how 10 and this statement got printed before 2 to 9 as the system didn't freeze");
  });
  