const hassmeeting = true;
const metting = new Promise((resolve, reject) => {
  if (!hassmeeting) {
    const meetingdetails = {
      name: "Codyad meeting",
      olcation: "Tehran",
      time: "01:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("meeting canseled"));
  }
});
metting.then((res) => console.log(res)).catch((rej) => console.log(rej));
