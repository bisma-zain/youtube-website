// function show() {
//       var btn = document.getElementById("menuBtn");
//       if (btn.style.backgroundColor === "black") {
//     btn.style.backgroundColor = "red";
//     btn.style.color = "pink";
//   } else {
//     btn.style.backgroundColor = "black";
//   }
// }
    
const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {
  const video = card.querySelector(".preview-video");
  const thumbnail = card.querySelector(".thumbnail");

  let hoverTimeout;

card.addEventListener("mouseenter", () => {
  hoverTimeout = setTimeout(() => {
    video.currentTime = 10; 
    video.style.opacity = "1";
    thumbnail.style.opacity = "0";
    video.play();
  }, 500);
});

  card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    video.pause();
    video.currentTime = 0;
    video.style.opacity = "0";
    thumbnail.style.opacity = "1";
  });
});