const promise1 = Promise.resolve("promise 1 is ok");
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise 2 is ok");
  }, 1000);
});
promise1.then((res) => console.log(`promise 1 : ${res}`));
promise2.then((res) => console.log(`promise 2 : ${res}`));

Promise.all([promise1, promise2]).then((res) => console.log(res));
