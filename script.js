function locomotive (){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
     
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

locomotive()


let tl = gsap.timeline()
tl.from("#loader h1", {
    y : 150,
    stagger : 0.5
})


tl.to("#loader",{
    top : "-100%",
    delay : 4,
    duration : 1.5,
    ease: "power4.out"
})

// tl.from("#page1 h1", {
//   y : 150,
//   stagger : 0.5

// })

let timer = document.querySelector(".load-timer h1 span")
let grow = 0

let int =  setInterval(function(){
    if(grow < 100){
        grow ++
        timer.innerHTML = grow
    }
    else{
        clearInterval(int)
    }

}, 50)

Shery.mouseFollower()
const navPart2 = document.querySelector("#nav-part2")
navPart2.addEventListener("mouseenter", function(){
  gsap.to(".mousefollower", {
    scale : 0.5
  })
})

navPart2.addEventListener("mouseleave", function(){
  gsap.to(".mousefollower", {
    scale : 1
  })
})
Shery.makeMagnet("#nav-part2 h3")


const videoCon =  document.querySelector("#video-container")
const video =  document.querySelector("#video-container video")
const videoImage =  document.querySelector("#video-container img")
const playBtn = document.querySelector("#play-btn")


let flag = 0


videoCon.addEventListener("click", function(){
  if(flag == 0){
    videoImage.style.opacity = "0"
    playBtn.style.scale = 0.8
    playBtn.innerHTML = '<i class="ri-pause-line"></i>'
    video.play()
    flag = 1
    console.log("hello2")
  }
  else{
    videoImage.style.opacity = "1"
    playBtn.style.scale = 1
    playBtn.innerHTML = '<i class="ri-play-line"></i>'
    video.pause()
    flag = 0
    console.log("chalo2")
  }
})



videoCon.addEventListener("mousemove", function(dets){
    gsap.to("#play-btn", {
      left : dets.x - 400,
      top : dets.y - 200
    })
})


const mouseFollower = document.querySelectorAll(".mousefollower")
mouseFollower.forEach(function(elem){
  videoCon.addEventListener("mouseenter", function(){
    elem.style.opacity = "0"
 })

 videoCon.addEventListener("mouseleave", function(){
  elem.style.opacity = "1"
})

})




gsap.to("#page3 .line", {
  width : "63%",
  scrollTrigger : {
    trigger : "#page3",
    scroller : "#main",
    // markers : true,
    start : "top 70%",
    end : "top 65%",
    // scrub : 2
  }
})


Shery.imageEffect(".images", {
  style : 6,
  // debug : true,
  gooey : true,
  // config : {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333002196431},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.22,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

  config : {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333002196431},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":12}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  
})

function footerAnimation (){
  const footh1 = document.querySelectorAll("#footer .content")
  footh1.forEach(function(e){
    let foottext =   e.textContent
    let footsplit = foottext.split("")
    let clutter = ""
    footsplit.forEach(function(element){
        clutter += `<span>${element}</span>`
    })
    
    e.innerHTML = clutter
    console.log(clutter)
  })
  
  
  const footerText = document.querySelector(".footer-text")
  
  footerText.addEventListener("mouseenter", function(){
    gsap.to(".footer-text h1 span", {
      opacity : 0,
      stagger : 0.05,
    })
  
    gsap.to(".footer-text h2 span ", {
      opacity : 1,
      stagger : 0.05,
      delay : 0.4
    })
  
    gsap.to(".footer-text h2",{
      opacity : 1
    })
  
    gsap.to(".footer-text img", {
      left : "80%",
      delay : 0.6
    })
  })
  
  footerText.addEventListener("mouseleave", function(){
    gsap.to(".footer-text h1 span", {
      opacity : 1,
      stagger : 0.05,
    })
    gsap.to(".footer-text h2 span", {
      opacity : 0,
      stagger : 0.05,
      delay : 0.1
  
    })
  
    gsap.to(".footer-text img", {
      left : "75%"
    })
  })
}

footerAnimation()


let specialtext = document.querySelector(".specialtext")
const flagImg = document.querySelector("#page1 img")

specialtext.addEventListener("mouseenter", function(){
  flagImg.style.opacity = "1"
})

specialtext.addEventListener("mouseleave", function(){
  flagImg.style.opacity = "0"
})

specialtext.addEventListener("mousemove", function(yo){
  // let diff = yo.clientY - yo.getBoundingClientRect().top
  gsap.to("#page1 img", {
    left : yo.x ,
    top : yo.y - 200,
    transform : "translate(-50%, -50%)"
  })
})

