    // Initialize Animate on Scroll (AOS) library
    // This adds the fade-in effects as the user scrolls down the page.
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Animation happens only once per element
        offset: 50,    // Trigger animation when element is 50px into the viewport
    });


    // --- Sticky Navigation & Mobile Menu Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hamburger Menu Toggle for Mobile_モバイル用ハンバーガーメニュートグル
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); 
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked_リンクをクリックするとモバイルメニューが閉じます
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Close mobile menu if clicking outside_外部をクリックするとモバイルメニューが閉じます
    document.addEventListener('click', function(e) {
        if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const paginationButtons = document.querySelectorAll('.pagination-btn');
        const testimonialPages = document.querySelectorAll('.testimonial-page');

        paginationButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetPage = this.getAttribute('data-page');

                // Update button active state
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Update page visibility
                testimonialPages.forEach(page => {
                    if (page.getAttribute('data-page') === targetPage) {
                        page.classList.add('active');
                    } else {
                        page.classList.remove('active');
                    }
                });
            });
        });
    });
