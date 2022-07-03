console.log(gsap)


gsap.to("p", {
  scrollTrigger: {
    trigger:".about",
  }
})

gsap.to("h3", {
  scrollTrigger: {
    trigger:".about",
  }
})

gsap.to("h4", {
  scrollTrigger: {
    trigger:".about",
  }
})

// Trigger animation
gsap.to("p", {
  scrollTrigger: {
    trigger: ".about", // Define the trigger element which initializes the animation
    pin: true,
    start: "top top", // First value defines whether bottom or top || Second value defines which position of the VIEWPORT
    end: "bottom top", // Same as start
    scrub: true, // Define wether or not the animation should follow your scroll bar
    ease: "power1.inOut", // Define the easing method, for smooth animations
    markers: true // Markers help situating your animation
  },
  fontSize: 11, // CSS Property written in camelCase for JS
  y: - 500, // Translates on the y axis
})
