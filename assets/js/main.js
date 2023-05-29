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



let vidPlayBtn = document.querySelector("#play-btn")

let vidPauseBtn = document.querySelector("#pause-btn")

let videoContant = document.querySelector("#video_contant")

let vidControles = document.querySelector("#vid-Controles")

// vidControles.addEventListener("click", function(){
//     if(videoContant.pause || videoContant.end){
//         videoContant.play()
//     }else{
//         videoContant.play()
//     }
// })


vidPauseBtn.style.display="none"

vidPlayBtn.addEventListener("click", function(){
    videoContant.play();
    console.log("heheee")
    this.style.display="none"
    vidPauseBtn.style.display="block"
})

vidPauseBtn.addEventListener("click", function(){
    videoContant.pause();
    this.style.display="none"
    vidPlayBtn.style.display="block"
})

