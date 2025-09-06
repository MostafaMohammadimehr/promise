const hassmeeting = false;
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
  const calender = `${meetingdetails.name} is scheduled at ${meetingdetails.time} on ${meetingdetails.location}`;
  return Promise.resolve(calender);
};

metting
  .then(aDd)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));
