const getmessage = (callback) => {
  setTimeout(() => {
    callback("hello");
  }, 2000);
};
const myfunction = (msg) => console.log(msg);

getmessage(myfunction);
