gsap.registerPlugin(ScrollTrigger)

gsap.to(".image", {
        duration: .5,
        width: "100%",
        scrollTrigger: {
            trigger: '#sec_heading',
            start: "top center",
            scrub: 1,
        }
})
