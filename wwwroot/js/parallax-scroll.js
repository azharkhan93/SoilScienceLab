// Parallax Scroll Effects with GSAP
window.initializeParallaxScroll = function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background effects
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    parallaxBgs.forEach(bg => {
        gsap.to(bg, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: bg,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Enhanced component reveal animations with layered effects
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((element, index) => {
        // Set initial state
        gsap.set(element, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            zIndex: 10 + index
        });

        // Create timeline for complex animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    // Fade out previous elements
                    const prevElements = document.querySelectorAll('.reveal-element');
                    prevElements.forEach((prev, i) => {
                        if (i < index) {
                            gsap.to(prev, {
                                opacity: 0.3,
                                scale: 0.95,
                                y: -20,
                                duration: 0.8,
                                ease: "power2.out"
                            });
                        }
                    });
                },
                onLeave: () => {
                    // Reset when leaving viewport
                    gsap.to(element, {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                },
                onEnterBack: () => {
                    // Animate back when re-entering
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                },
                onLeaveBack: () => {
                    // Fade out when scrolling back up
                    gsap.to(element, {
                        opacity: 0,
                        y: -50,
                        scale: 0.9,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }
        });

        // Main reveal animation
        tl.to(element, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // Enhanced stagger animations with layered effects
    const staggerElements = document.querySelectorAll('.stagger-element');
    if (staggerElements.length > 0) {
        staggerElements.forEach((element, index) => {
            // Set initial state
            gsap.set(element, {
                opacity: 0,
                y: 80,
                scale: 0.7,
                zIndex: 20 + index
            });

            // Create timeline for stagger animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        // Fade out all other elements when stagger section enters
                        const allElements = document.querySelectorAll('.reveal-element, .timeline-animation');
                        allElements.forEach(el => {
                            gsap.to(el, {
                                opacity: 0.2,
                                scale: 0.9,
                                y: -30,
                                duration: 0.6,
                                ease: "power2.out"
                            });
                        });
                    },
                    onLeave: () => {
                        // Reset stagger elements
                        gsap.to(element, {
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    },
                    onEnterBack: () => {
                        // Animate back when re-entering
                        gsap.to(element, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        });
                    },
                    onLeaveBack: () => {
                        // Fade out when scrolling back up
                        gsap.to(element, {
                            opacity: 0,
                            y: -40,
                            scale: 0.8,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            });

            // Main stagger animation
            tl.to(element, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.0,
                delay: index * 0.15,
                ease: "power3.out"
            });
        });
    }

    // Smooth scroll for navigation
    const smoothScroll = (target) => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: 0 },
            ease: "power2.inOut"
        });
    };

    // Add smooth scroll to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            const targetElement = document.querySelector(target);
            if (targetElement) {
                smoothScroll(targetElement);
            }
        });
    });

    // Parallax sections with different speeds
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach((section, index) => {
        const speed = 0.5 + (index * 0.1); // Different speed for each section
        
        gsap.to(section, {
            yPercent: -20 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Text reveal animations
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const chars = text.split('').map(char => 
            char === ' ' ? '\u00A0' : char
        );
        
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            element.appendChild(span);
        });

        const spans = element.querySelectorAll('span');
        gsap.to(spans, {
            opacity: 1,
            y: 0,
            duration: 0.05,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Enhanced timeline animations with layered effects
    const timelineElements = document.querySelectorAll('.timeline-animation');
    timelineElements.forEach((element, index) => {
        // Set initial state
        gsap.set(element, {
            opacity: 0,
            y: 120,
            scale: 0.8,
            zIndex: 30 + index
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    // Dramatically fade out all other elements
                    const allElements = document.querySelectorAll('.reveal-element, .stagger-element');
                    allElements.forEach(el => {
                        gsap.to(el, {
                            opacity: 0.1,
                            scale: 0.85,
                            y: -50,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    });
                },
                onLeave: () => {
                    // Reset timeline element
                    gsap.to(element, {
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                },
                onEnterBack: () => {
                    // Animate back when re-entering
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.0,
                        ease: "power3.out"
                    });
                },
                onLeaveBack: () => {
                    // Fade out when scrolling back up
                    gsap.to(element, {
                        opacity: 0,
                        y: -60,
                        scale: 0.8,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }
        });

        // Main timeline animation
        tl.to(element, 
            { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 1.5, 
                ease: "power3.out" 
            }
        )
        .fromTo(element.querySelectorAll('.child-element'), 
            { opacity: 0, y: 40, scale: 0.9 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 0.8, 
                stagger: 0.15, 
                ease: "power2.out" 
            },
            "-=0.8"
        );

        // Add a subtle bounce effect
        tl.to(element, {
            y: -5,
            duration: 0.3,
            ease: "power2.out"
        })
        .to(element, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    console.log('Parallax scroll effects initialized');
};

// Utility functions for manual control
window.parallaxUtils = {
    revealElement: function(element) {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    },

    staggerReveal: function(elements, stagger = 0.1) {
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: stagger,
            ease: "power2.out"
        });
    },

    smoothScrollTo: function(target, offset = 0) {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: offset },
            ease: "power2.inOut"
        });
    }
}; 