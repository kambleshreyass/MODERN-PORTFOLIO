function trigger(){
  gsap.from("#home",{
    y:100,
    duration:1.1,
    scrollTrigger:"#home"
  })
  gsap.to("#home .secondImg",{
    boxShadow: "1px 5px 55px white"
  })
  gsap.from("#about",{
    y:100,
    duration:1.1,
    scrollTrigger:"#about"
  })
  gsap.from("#project",{
    y:100,
    duration:1.1,
    scrollTrigger:"#project"
  })
}
trigger();

var main = document.querySelector("#container");
var crsr = document.querySelector("#cursor");
var h1 = document.querySelector("#cursor h1")
main.addEventListener("mousemove",function(dets){
  gsap.to(crsr,{
    x:dets.x,
    y:dets.y
  })
})

// gsap.from("#cursor",{
//   height:120,
//   width:120,
//   repeat:-1,
//   yoyo:true,
//   backgroundColor:"yellow"
// })

var project = document.querySelector(".project-img");
project.addEventListener("mousemove",function(){
  gsap.to(h1,{
    display:"block"
  })
})
var project = document.querySelector(".project-img");
project.addEventListener("mouseleave",function(){
  gsap.to(h1,{
    display:"none"
  })
})





gsap.to(".marque",{
  transform:'translateX(-100%)',
  duration:3,
  repeat:-1,
  ease:"none"
})