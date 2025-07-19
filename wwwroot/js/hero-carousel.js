// Hero Carousel with GSAP
window.initializeHeroCarousel = function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const contents = document.querySelectorAll('.carousel-content');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let isAnimating = false;

    // Initialize first slide
    gsap.set(slides[0], { opacity: 1 });
    gsap.set(contents[0], { opacity: 1, y: 0 });
    gsap.set(thumbnails[0], { scale: 1.1 });

    // Set initial states for all other slides
    for (let i = 1; i < slides.length; i++) {
        gsap.set(slides[i], { opacity: 0 });
        gsap.set(contents[i], { opacity: 0, y: 30 });
        gsap.set(thumbnails[i], { scale: 1 });
    }

    function goToSlide(index) {
        if (isAnimating || index === currentSlide) return;
        
        isAnimating = true;

        // Create timeline for coordinated animations
        const tl = gsap.timeline({
            onComplete: () => {
                // Update active states
                slides[currentSlide].classList.remove('active');
                contents[currentSlide].classList.remove('active');
                thumbnails[currentSlide].classList.remove('active');

                slides[index].classList.add('active');
                contents[index].classList.add('active');
                thumbnails[index].classList.add('active');

                currentSlide = index;
                isAnimating = false;
            }
        });

        // Smooth crossfade with subtle zoom effect
        tl.to(slides[currentSlide], {
            opacity: 0,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.inOut"
        }, 0);

        tl.fromTo(slides[index], 
            { opacity: 0, scale: 0.95 },
            { 
                opacity: 1,
                scale: 1,
                duration: 0.5, 
                ease: "power2.inOut" 
            }, 
            0
        );

        // Animate out current content
        tl.to(contents[currentSlide], {
            opacity: 0,
            y: -50,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.out"
        }, 0);

        // Animate in new content (synchronized with slide)
        tl.to(contents[index], {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut"
        }, 0);

        // Animate thumbnail
        tl.to(thumbnails[currentSlide], {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        }, 0);

        // Animate text elements with stagger (synchronized with slide)
        const newContent = contents[index];
        const heading = newContent.querySelector('h1');
        const paragraph = newContent.querySelector('p');
        const button = newContent.querySelector('.flex');

        if (heading) {
            tl.fromTo(heading, 
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.inOut" },
                0.1
            );
        }

        if (paragraph) {
            tl.fromTo(paragraph,
                { opacity: 0, y: 20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.inOut" },
                0.2
            );
        }

        if (button) {
            tl.fromTo(button,
                { opacity: 0, y: 15, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.inOut" },
                0.3
            );
        }

        // Animate thumbnail with bounce effect (synchronized)
        tl.to(thumbnails[index], {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.inOut"
        }, 0.4);
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prev);
    }



    // Thumbnail clicks
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Auto-play functionality
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    // Start auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left
            } else {
                prevSlide(); // Swipe right
            }
        }
    }

    console.log('Hero carousel initialized');
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.hero-carousel')) {
        window.initializeHeroCarousel();
    }
}); 