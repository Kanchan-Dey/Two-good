gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.to("#logo>svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
       
        start: "top 0",
        end: "top -5%",
        scrub:true,
    }
})

gsap.to("#menu",{
    transform:"translateY(-100%)",
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        
        start: "top 0",
        end: "top -5%",
        scrub:true,
    }
})

gsap.from("#leftie>p",{
    opacity:0,
    z:-20,
    y:-20,
    x:-20,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 0",
        end:"top -5%",
     
       
    }
})

function videocon(){const movewindow = document.querySelector("#video-container");
const playbtn=document.querySelector("#play")
movewindow.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
       })
})
movewindow.addEventListener("mouseleave",function(){
   gsap.to(playbtn,{
    scale:0,
    opacity:0,
   })
})
movewindow.addEventListener("mousemove",function(dets){
    var x1=dets.clientX;
    console.log("x",x1);
    var y1=dets.clientY;
    console.log("y",y1);
   
    gsap.to(playbtn,{
        transform:`translate(-50%,-50%) scale(1)`,
        left:dets.x-40,
        top:dets.y-80,
        
    })
})
}
videocon();



var tl=gsap.timeline();
gsap.from("#page1>h1",{
 
    opacity:0,
    y:80,
    stagger:0.5,
    duration:0.8,
    delay:0.2,
   
   })
   gsap.from("#video-container",{
    y:50,
    opacity:0,
    delay:0.5,
    duration:0.5,
   
   })
  


document.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
    })
})
document.querySelector("#elemo1").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor=`rgb(245, 220, 183)`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(1)",
    })
})
document.querySelector("#elemo1").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor=`white`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(0)",
    })
})
document.querySelector("#elemo2").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor=`rgba(158, 157, 157, 0.831)`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(1)",

    })
})
document.querySelector("#elemo2").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor=`white`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(0)",

    })
})
document.querySelector("#elemo3").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor=`rgba(174, 174, 235, 0.877)`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(1)",
    })
})
document.querySelector("#elemo3").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor=`white`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(0)",
        
    })
})
document.querySelector("#elemo4").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor=`rgba(38, 171, 38, 0.743)`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(1)",
        
    })
})
document.querySelector("#elemo4").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor=`white`;
    gsap.to("#cursor",{
        transform:"translate(-50%,-50%) scale(0)",
        
    })
})