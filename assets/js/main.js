const getmessage = (callback) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("hello");
    }, 2000);
  });
};
const myfunction = (msg) => console.log(msg);

getmessage().then(myfunction);
