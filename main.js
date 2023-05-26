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



// let video_play = document.querySelector("#playvideo")
// video_play.addEventListener('click', function(){
//     console.log("hello world");
// })

// let abc = document.querySelector("#playvideo");
// abc.addEventListener("click", function(){
//     // video_play.classList.add('toggle')
//     playvideo.play();
//     console.log("hehehe")
// })

let myvideo = document.querySelector("#video1")
function playpause(){
    if(myvideo.paused){
        myvideo.play();
        myvideo.controls.show;

        console.log("hello world")
    }
    else{
        myvideo.pause();
    }


}

let video_icon = document.querySelector("#v_icon")
function hover_fnct(){
    if(myvideo.paused || myvideo.ended){
        
        video_icon.style.opacity = 1;
        console.log("video icon")
    }
    else{
        video_icon.style.opacity = 0;
    }
}



// console.log("hello world");
// const video = document.getElementById("video");
// const circlePlayButton = document.getElementById("circle-play-b");

// function togglePlay() {
// 	if (video.paused || video.ended) {
// 		video.play();
// 	} else {
// 		video.pause();
// 	}
// }

// circlePlayButton.addEventListener("click", togglePlay);
// video.addEventListener("playing", function () {
// 	circlePlayButton.style.opacity = 0;
// });
// video.addEventListener("pause", function () {
// 	circlePlayButton.style.opacity = 1;
// });



