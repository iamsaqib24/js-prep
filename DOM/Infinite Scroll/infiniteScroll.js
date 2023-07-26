const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;

let canFetchTestimonials = true;
let afterID = null;

const testimonialContainer = document.getElementById("testimonials-container");

testimonialContainer.addEventListener("scroll", handleScroll);

fetchAndAppendTestimonials();

function handleScroll() {
  if (!canFetchTestimonials) return;
  const spaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;

  if (spaceLeftToScroll > 0) return;
  fetchAndAppendTestimonials();
}

function fetchAndAppendTestimonials() {
  canFetchTestimonials = false;
  const url = createTestimonialsUrl();
  fetch(url)
    .then((response) => response.json())
    .then(({ hasNext, testimonials }) => {
      const fragment = document.createDocumentFragment();
      testimonials.forEach(({ message }) => {
        fragment.appendChild(createTestimonialElement(message));
      });
      testimonialContainer.appendChild(fragment);

      if (hasNext) {
        afterID = testimonials[testimonials.length - 1].id;
      } else {
        testimonialContainer.removeEventListener("scroll", handleScroll);
      }
      canFetchTestimonials = true;
    });
}

function createTestimonialElement(message) {
  const testimonialElement = document.createElement("p");
  testimonialElement.textContent = message;
  testimonialElement.classList.add("testimonial");

  return testimonialElement;
}

function createTestimonialsUrl() {
  const url = new URL(API_BASE_URL);
  //   console.log(url);
  url.searchParams.set("limit", PAGE_SIZE);

  if (afterID !== null) {
    url.searchParams.set("after", afterID);
  }

  return url;
}
