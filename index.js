const path = document.getElementById('path1639');
const car2 = document.getElementById('image600');


gsap.timeline({repeat: -1})
    .to("#image600", {
  duration: 4,
  motionPath: {
    path: "#path1639",
    align: "#path1639",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90
  },
  ease: "none"
}).to("#image600", {
  duration: 4,
  motionPath: {
    path: "#path4819",
    align: "#path4819",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90
  },
  ease: "none"
})