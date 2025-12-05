const slides = [
  {
    desktop: "./photos/desktop-image-hero-1.jpg",
    mobile: "./photos/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text: "we provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    desktop: "./photos/desktop-image-hero-2.jpg",
    mobile: "./photos/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    text: "with stores all over the world, it's easy for you to find furniture for your home or place of business. locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    desktop: "./photos/desktop-image-hero-3.jpg",
    mobile: "./photos/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text: "our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
];

const heroImg = document.querySelector(".hero-img img");
const heroSource = document.querySelector(".hero-img source");
const heroTitle = document.querySelector(".hero-txt h1");
const heroText = document.querySelector(".hero-txt p");

const btnLeft = document.querySelector(".buttons img:first-child");
const btnRight = document.querySelector(".buttons img:last-child");

let menu = document.querySelector("nav");
      let header = document.querySelector("header");

      function toogleMenu() {
        menu.classList.toggle("showmenu");
        header.classList.toggle("showheader");
      }

let current = 0;

function updateSlide() {
  const s = slides[current];

  heroSource.srcset = s.desktop;
  heroImg.src = s.mobile;
  heroTitle.textContent = s.title;
  heroText.textContent = s.text;
}


btnRight.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

btnLeft.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

function autoAnimate(){
    setInterval(()=>{
        if(current === slides.length-1){
            current = 0;
        }else{
            current++;
        }
        updateSlide();
    },5000)
}
autoAnimate();
