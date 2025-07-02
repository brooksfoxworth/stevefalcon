// --- Mobile Menu Toggle, Swiper Carousels, and Section Fade-in ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        const icons = menuBtn.querySelectorAll('svg');
        menuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.style.display === 'block';
            if (isOpen) {
                mobileMenu.style.display = 'none';
                if (icons[0]) icons[0].classList.remove('hidden');
                if (icons[1]) icons[1].classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            } else {
                mobileMenu.style.display = 'block';
                if (icons[0]) icons[0].classList.add('hidden');
                if (icons[1]) icons[1].classList.remove('hidden');
                menuBtn.setAttribute('aria-expanded', 'true');
            }
        });
        // Close menu when a link is clicked (on mobile)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                    if (icons[0]) icons[0].classList.remove('hidden');
                    if (icons[1]) icons[1].classList.add('hidden');
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Swiper Carousels for Mobile (Tour Dates & Gallery) ---
    function initSwipers() {
        if (window.innerWidth < 768 && window.Swiper) {
            // Tour Dates Swiper
            var tourSwiper = document.querySelector('.tour-swiper');
            if (tourSwiper && !tourSwiper.classList.contains('swiper-initialized')) {
                new Swiper(tourSwiper, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: { el: '.tour-swiper .swiper-pagination', clickable: true },
                    loop: false,
                    allowTouchMove: true,
                });
                tourSwiper.classList.add('swiper-initialized');
            }
            // Gallery Swiper
            var gallerySwiper = document.querySelector('.gallery-swiper');
            if (gallerySwiper && !gallerySwiper.classList.contains('swiper-initialized')) {
                new Swiper(gallerySwiper, {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: { el: '.gallery-swiper .swiper-pagination', clickable: true },
                    loop: false,
                    allowTouchMove: true,
                });
                gallerySwiper.classList.add('swiper-initialized');
            }
        }
    }
    // Wait for Swiper to be available if loaded async
    if (window.Swiper) {
        initSwipers();
    } else {
        var swiperInterval = setInterval(function() {
            if (window.Swiper) {
                clearInterval(swiperInterval);
                initSwipers();
            }
        }, 100);
    }

    // --- Reduce vertical padding for mobile for key sections ---
    if (window.innerWidth < 768) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('py-16', 'py-[var(--section-padding-y)]');
            section.classList.add('py-10');
        });
    }

    // --- Fade-in Animation on Scroll ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    if (sectionsToFade.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        sectionsToFade.forEach(section => observer.observe(section));
    }
});