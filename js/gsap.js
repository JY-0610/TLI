// var $sections = document.querySelectorAll(".content");
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "section1",
//     pin: true,
//     scrub: 0.3,
//     start: "top top",
//     end: "+=3000"
//   }
// });
// tl.to($sections, {yPercent: -100, duration:3, ease: "none", stagger:4})
//   .to({},{duration:1});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top", 
    pin: 'true', 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});

