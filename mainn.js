document.addEventListener("DOMContentLoaded", function(){
  const slides = document.querySelectorAll(".slide");
  const bars = document.querySelectorAll(".bar .fill");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;
  let timer;
  const duration = 5000; // 5s per slide

  function startBar(i){
    bars.forEach(b => { b.style.animation = "none"; b.offsetHeight; }); // reset
    bars[i].style.animation = `fillAnim ${duration}ms linear forwards`;
  }

  function showSlide(n){
    slides.forEach((s, i) => s.classList.toggle("active", i === n));
    startBar(n);
    index = n;
    clearTimeout(timer);
    timer = setTimeout(nextSlide, duration);
  }

  function nextSlide(){ showSlide((index + 1) % slides.length); }
  function prevSlide(){ showSlide((index - 1 + slides.length) % slides.length); }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  // Click on bar
  document.querySelectorAll(".bar").forEach((bar,i)=>{
    bar.addEventListener("click", ()=>showSlide(i));
  });

  // Init
  showSlide(0);
});