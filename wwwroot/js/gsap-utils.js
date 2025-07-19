// GSAP Animation Utilities for Blazor
window.gsapUtils = {
    // Initialize GSAP with ScrollTrigger
    init: function() {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP initialized with ScrollTrigger');
    },

    fadeIn: function(element, duration = 0.8, delay = 0) {
        gsap.fromTo(element, 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: duration, 
                delay: delay,
                ease: "power2.out"
            }
        );
    },

    // Slide in from left
    slideInLeft: function(element, duration = 0.8, delay = 0) {
        gsap.fromTo(element,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: duration,
                delay: delay,
                ease: "power2.out"
            }
        );
    },

    // Slide in from right
    slideInRight: function(element, duration = 0.8, delay = 0) {
        gsap.fromTo(element,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: duration,
                delay: delay,
                ease: "power2.out"
            }
        );
    },

    // Scale in animation
    scaleIn: function(element, duration = 0.6, delay = 0) {
        gsap.fromTo(element,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: duration,
                delay: delay,
                ease: "back.out(1.7)"
            }
        );
    },

    // Stagger animation for multiple elements
    staggerFadeIn: function(elements, stagger = 0.1, duration = 0.6) {
        gsap.fromTo(elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: duration,
                stagger: stagger,
                ease: "power2.out"
            }
        );
    },

    // Scroll-triggered animation that runs every time element enters viewport
    scrollTrigger: function(element, animation, trigger = "top 80%") {
        gsap.fromTo(element,
            animation.from || { opacity: 0, y: 30 },
            {
                ...animation.to || { opacity: 1, y: 0 },
                duration: animation.duration || 0.8,
                ease: animation.ease || "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: trigger,
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        // Animation plays when element enters viewport
                        gsap.to(element, {
                            ...animation.to || { opacity: 1, y: 0 },
                            duration: animation.duration || 0.8,
                            ease: animation.ease || "power2.out"
                        });
                    },
                    onLeave: () => {
                        // Reset animation when element leaves viewport
                        gsap.set(element, animation.from || { opacity: 0, y: 30 });
                    },
                    onEnterBack: () => {
                        // Animation plays when element re-enters viewport from top
                        gsap.to(element, {
                            ...animation.to || { opacity: 1, y: 0 },
                            duration: animation.duration || 0.8,
                            ease: animation.ease || "power2.out"
                        });
                    },
                    onLeaveBack: () => {
                        // Reset animation when element leaves viewport from top
                        gsap.set(element, animation.from || { opacity: 0, y: 30 });
                    }
                }
            }
        );
    },

    // Stagger animation for multiple elements with scroll trigger
    staggerScrollTrigger: function(elements, stagger = 0.1, duration = 0.6, trigger = "top 80%") {
        gsap.fromTo(elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: duration,
                stagger: stagger,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elements[0],
                    start: trigger,
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    },

    // Hero section animation
    animateHero: function() {
        const tl = gsap.timeline();
        
        tl.fromTo('.hero-title', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo('.hero-subtitle',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        )
        .fromTo('.hero-button',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.3"
        );
    },

    // Card hover animation
    setupCardHover: function(cardSelector) {
        const cards = document.querySelectorAll(cardSelector);
        
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
    },

    // Text reveal animation
    textReveal: function(element, duration = 1) {
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
            element.appendChild(span);
            
            gsap.to(span, {
                opacity: 1,
                duration: 0.05,
                delay: index * 0.05,
                ease: "none"
            });
        });
    },

    // GSAP built-in animations
    fromTo: function(element, fromVars, toVars) {
        return gsap.fromTo(element, fromVars, toVars);
    },

    to: function(element, toVars) {
        return gsap.to(element, toVars);
    },

    from: function(element, fromVars) {
        return gsap.from(element, fromVars);
    },

    set: function(element, vars) {
        return gsap.set(element, vars);
    },

    timeline: function() {
        return gsap.timeline();
    },

    // Advanced scroll trigger with custom callbacks
    advancedScrollTrigger: function(element, config) {
        const defaultConfig = {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {},
            onLeave: () => {},
            onEnterBack: () => {},
            onLeaveBack: () => {},
            animation: {
                from: { opacity: 0, y: 30 },
                to: { opacity: 1, y: 0 },
                duration: 0.8,
                ease: "power2.out"
            }
        };

        const finalConfig = { ...defaultConfig, ...config };
        
        ScrollTrigger.create({
            trigger: finalConfig.trigger,
            start: finalConfig.start,
            end: finalConfig.end,
            toggleActions: finalConfig.toggleActions,
            onEnter: finalConfig.onEnter,
            onLeave: finalConfig.onLeave,
            onEnterBack: finalConfig.onEnterBack,
            onLeaveBack: finalConfig.onLeaveBack,
            animation: gsap.fromTo(element, finalConfig.animation.from, finalConfig.animation.to)
        });
    }
};

// Initialize GSAP when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.gsapUtils.init();
}); 