function init(params) {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  
  init();
  
  var crsr = document.querySelector(".cursor");
  var crsrh2 = document.querySelector(".cursor h2");
  var main = document.querySelector(".main");
  
  
  document.addEventListener("mousemove", function (dets) {
    // console.log(dets)
    crsr.style.left = dets.x + 10 + "px"
    crsr.style.top = dets.y + 10 + "px"
  })
  
  // var vid = document.querySelector(".page1 video");
  // vid.addEventListener("mouseenter",function(dets){
  //   crsr.style.backgroundColor = "red"
  //   crsrh2.style.display = "block" 
  //   crsr.style.left = dets.x + "px"
  //   crsr.style.top = dets.y + "px"
  // })
  // vid.addEventListener("mouseleave",function(dets){
  //   crsr.style.backgroundColor = "#edbfff"
  //   crsrh2.style.display = "none" 
  // })
  
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0%",
      scrub: 3
    }
  })
  tl.to(".page1 h1", {
    x: -100,
  }, "anim")
  tl.to(".page1 h2", {
    x: 100,
  }, "anim")
  tl.to(".page1 video", {
    width: "90%",
  }, "anim")
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -115%",
      end: "top -120%",
      scrub: 3
    }
  })
  tl2.to(".main", {
    backgroundColor: "#fff",
    scrub: 1
  })
  
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -285%",
      end: "top -300%",
      scrub: 3
    }
  })
  tl3.to(".main", {
    backgroundColor: "#0f0d0d"
  
  })
  
  var box = document.querySelectorAll(".box")
  box.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var att = elem.getAttribute("data-image")
      crsr.style.zIndex = "100"
      crsr.style.mixBlendMode = "normal"
      crsr.style.height = "250px"
      crsr.style.width = "300px"
      crsr.style.borderRadius = "0px"
      crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function () {
      crsr.style.zIndex = "8"
      crsr.style.mixBlendMode = "difference"
      crsr.style.height = "25px"
      crsr.style.width = "25px"
      crsr.style.borderRadius = "50%"
      crsr.style.backgroundImage = `none`
      crsr.style.backgroundColor = "#edbfff"
  
  
    })
  })
  
  var nav = document.querySelectorAll("#nav")
  var h4 = document.querySelectorAll("#nav h4")
  var purple = document.querySelector("#purple")
  
  
  h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      purple.style.display = "block"
      purple.style.opacity = "1"
      purple.innerHTML = clutter
    })
    elem.addEventListener("mouseleave", function () {
      purple.style.display = "none"
      purple.style.opacity = "0"
    })
  })
  