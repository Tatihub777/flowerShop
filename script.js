gsap.from('.topText', {y: 10, ease: 'power1', duration: 2})
gsap.from('.link', {opacity: 0, duration: 1.5, stagger: .5})
gsap.from('.img', {opacity: 0, duration: 1, stagger: .6, delay: 2})
gsap.from('.par', {opacity: 0, duration: 1, stagger: .6, delay: 2})
gsap.to('.girl', {opacity: 0, x: 300, duration: 2, delay: 4})