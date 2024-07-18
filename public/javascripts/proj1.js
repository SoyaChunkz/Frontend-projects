var crsr =  document.querySelector("#cursor");
var blur =  document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-40+"px";
    crsr.style.top = dets.y-10+"px";
    blur.style.left = dets.x-250+"px";
    blur.style.top = dets.y-250+"px";
    // crsr.style.transform = "translate(-50%,-50%)";
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #96c11e";
        crsr.style.backgroundColor = "#96c11e";
    })
})



gsap.to("#nav",{
    backgroundColor : "black",
    height : "110px",
    duration : 0.5,
    delay : 1,
    scrollTrigger : {
        target : "#nav",
        scroller : "body",
        scrub : 1,
        // markers : true,
        start : "top -10%",
        end : "top -11%"
    }
})

gsap.to("#main",{
    backgroundColor : "black",
    scrollTrigger : {
        target : "#main",
        scroller : "body",
        // markers : true ,
        start : "top -25%",
        end : "top -60%",
        scrub : 2,
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:0
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        target:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        target:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        target:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

