function homePageAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: 'top top',
            end: 'bottom bottom',
            scrub: .5,
            // markers: true,
        },
    })

    gsap.set('.slidemain', { scale: 7 })

    tl
        .to('.vdodiv', {
            '--clip': '0%',
            ease: 'power1.easeInOut'
        }, 'vdo')

        .to('.slidemain', {
            scale: 1,
            ease: 'power1.easeInOut'
        }, 'vdo')

        .to('.left', {
            xPercent: -10,
            duration: .3,
            ease: 'power1.easeInOut'
        }, 'b')
        .to('.right', {
            xPercent: 10,
            duration: .3,
            ease: 'power1.easeInOut'
        }, 'b')


}
homePageAnimation();

function realPageAnimation() {
    gsap.to('.slide', {
        scrollTrigger: {
            trigger: '.real',
            start: 'top top',
            end: 'bottom 0',
            scrub: 1,
            pin: true,
        },
        xPercent: -205,
        ease: 'power1.easeInOut'
    })

}
realPageAnimation()

function listElem() {
    document.querySelectorAll('.listelem').forEach(function (elem) {
        elem.addEventListener('mousemove', function (dets) {
            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                scale:1.6,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                duration: .3,
                ease: 'power1.easeInOut'
            })
        })
        elem.addEventListener('mouseleave', function () {
            gsap.to(this.querySelector('.picture'), { opacity: 0, duration: .3, ease: 'power1.easeInOut' })
        })
    })
}
listElem()

function paraText() {
    var clutter = ""
    document.querySelector('.paratext').textContent.split('').forEach(function (e) {
        if (e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector('.paratext').innerHTML = clutter

    gsap.set('.paratext span', { opacity: .1, })
    gsap.to('.paratext span', {
        scrollTrigger: {
            trigger: '.paratext',
            start: 'top 40%',
            end: 'bottom 50%',
            scrub: 1,
        },
        opacity: 1,
        duration: .3,
        ease: 'power1.easeInOut',
        stagger: .05,
    })
}
paraText()

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco()

function capsuleAnimation(){
    gsap.to('.caps:nth-child(2)',{
        scrollTrigger:{
            trigger: '.capsule',
            start: 'top 50%',
            end: 'bottom 90%',
            scrub: 1,
        },
        y:-100,
        duration: 3,
        ease: 'power1.easeInOut',
    })
}
capsuleAnimation()

function bodyBG(){
    document.querySelectorAll('.section').forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: 'top 50%',
            end: 'bottom 60%',
            scrub: 1,
            onEnter:function(){
                document.body.setAttribute('theme', elem.getAttribute('data-color'))
            },
            onEnterBack:function(){
                document.body.setAttribute('theme', elem.getAttribute('data-color'))
            }
        })
    })
}
bodyBG()