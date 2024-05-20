function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Update ScrollTrigger on Locomotive Scroll update
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger to use Locomotive Scroll
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and Locomotive Scroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoScroll();

function cursorAnimation() {
    var page = document.querySelector("#page1");
    var cursor = document.querySelector("#cursor");

    page.addEventListener("mousemove", function(event) {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.5,
        });
    });

    page.addEventListener("mouseenter", function() {
        cursor.style.display = "flex";
    });

    page.addEventListener("mouseleave", function() {
        cursor.style.display = "none";
    });
}
cursorAnimation();

function navAnimation() {
    var tl = gsap.timeline();
    var menu = document.querySelector("nav i");
    var close = document.querySelector("#full i");

    tl.to("#full", {
        right: 0,
        duration: 0.5
    });
    tl.from("#full h4", {
        x: 150,
        duration: 0.6,
        stagger: 0.19,
        opacity: 0
    });
    tl.from("#full i", {
        opacity: 0
    });
    tl.pause();

    menu.addEventListener("click", function() {
        tl.play();
    });
    close.addEventListener("click", function() {
        tl.reverse();
    });
}
navAnimation();

function breakTheText(){
    var h1 = document.querySelector("#content h1");

    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2;
    
    var clutter = ""
    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            clutter +=`<span class="left">${elem}</span>`;
        }else{
            clutter +=`<span class="right">${elem}</span>`;
        }
       
    })
    h1.innerHTML = clutter
   
}
breakTheText();
function textAnimaiton(){
    gsap.from("h1 .left",{
        y:50,
        opacity:0,
        duration:0.8,
        delay:3,
        stagger:0.15
    })
    gsap.from("h1 .right",{
        y:80,
        opacity:0,
        duration:0.6,
        delay:3,
        stagger:-0.15
    })
}
textAnimaiton();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2
        }
    });
    gsap.from(".lien", {
        x: -1500,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2
        }
    });
}
page2Animation();

function loder(){
    var tl = gsap.timeline()

    tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.2
    })
    tl.to("#loader h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:-0.2
    })
    tl.to("#loader",{
    opacity:0,
    display:"none",
    })
    tl.from("#page1-content span",{
    y:100,
    opacity:0,
    stagger:0.1
    })
}
loder();




function page3Animation(){
    gsap.from("#page3>h1",{
        y:-150,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2
        }
    })
    gsap.from(".pcard",{
        y:500,
        opacity:0,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            scrub: 3
        }
    })
}
page3Animation();



function fotterAnimation(){
    // GSAP animation with ScrollTrigger
    gsap.from("#footer #fbottom h1 span", {
        y: -50,
        opacity: 0,
        duration: 2,
        stagger: 4,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main", // Ensure this matches your scroller element
            scrub:4,
            // markers: true,
            start: "top 10%", // Adjust as necessary for your layout
            end: "top 50%" // Optional end position
        }
    });

    gsap.from("#ftop",{
        y:-110,
        opacity:0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main", // Ensure this matches your scroller element
            scrub:4,
            // markers: true,
            start: "top 10%", // Adjust as necessary for your layout
            end: "top 50%" // Optional end position
        }
    })
}
fotterAnimation();

