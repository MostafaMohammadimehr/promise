let greeting = (name) => console.log(`hello ${name}`);
let userinfo = (firstname, lastname, callback) => {
  const fullname = `${firstname}  ${lastname}`;

  callback(fullname);
};
userinfo("Ali", "mohammadi", greeting);
