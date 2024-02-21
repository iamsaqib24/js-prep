const Leo = new Promise((res, rej) => {
  setTimeout(() => res("Leo"), 5000);
});

const Rambo = new Promise((res, rej) => {
  setTimeout(() => rej("Rambo"), 7000);
});

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const raceMethod = Promise.race([Leo, Rambo]);
raceMethod.then((value) => {
  console.log(value);
}); // after 5 seconds output will be 'Leo'

const myRaceMethod = Promise.myRace([Leo, Rambo]);
myRaceMethod.then((value) => {
  console.log(value);
}); // after 5 seconds output will be 'Leo'
