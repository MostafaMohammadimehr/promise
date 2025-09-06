const hassmeeting = true;
const metting = new Promise((resolve, reject) => {
  if (!hassmeeting) {
    const meetingdetails = {
      name: "Codyad meeting",
      location: "Tehran",
      time: "01:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("meeting canseled"));
  }
});

const aDd = (meetingdetails) => {
  return new Promise((res, rej) => {
    const calender = `${meetingdetails.name} is scheduled at ${meetingdetails.time} on ${meetingdetail.location}`;
    res(calender);
  });
};

metting.then((res) => console.log(res)).catch((rej) => console.log(rej));
