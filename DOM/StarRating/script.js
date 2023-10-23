// JavaScript code for star rating system

let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;

// Event listener for when a star is clicked
container.addEventListener("click", (e) => {
  let currentClicked = e.target.dataset.index;
  //   console.log(currentClicked);

  // Remove "star-filled" class from previously filled stars
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  // Add "star-filled" class to clicked stars
  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }

  // Update rating count
  document.getElementById(
    "count"
  ).innerHTML = `Rating Count : ${currentClicked}`;
  filled = currentClicked;
});

// Event listener for when mouse is over a star
container.addEventListener("mouseover", (e) => {
  let currentClicked = e.target.dataset.index;

  // Remove "star-filled" class from all stars
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  // Add "star-filled" class to stars up to the current mouseover star
  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }
});

// Event listener for when mouse leaves the star container
container.addEventListener("mouseleave", (e) => {
  // Remove "star-filled" class from all stars
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  // Add "star-filled" class to previously filled stars
  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});
