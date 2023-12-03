var rep = gsap.timeline({
    repeat:-1,
});


rep.to(".image-container", {
    ease: Expo.easeInOut,
    width: "100%",    
    stagger:6,
},'rep')

.to(".text h1",{
    esae: Expo.easeInOut,
    stagger: 6,
    top:0,
},'rep')

.to(".text h1",{
    delay: 6,
    esae: Expo.easeInOut,
    stagger: 6,
    top: "-100%",
},'rep')

.to(".para p",{
    esae: Expo.easeInOut,
    stagger: 6,
    top:0,
},'rep')

.to(".para p",{
    delay: 6,
    esae: Expo.easeInOut,
    stagger: 6,
    top: "-100%",
},'rep')

