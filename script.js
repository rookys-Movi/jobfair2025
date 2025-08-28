    // Initialize Animate on Scroll (AOS) library
    // This adds the fade-in effects as the user scrolls down the page.
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Animation happens only once per element
        offset: 50,    // Trigger animation when element is 50px into the viewport
    });

    // --- Chart.js Configuration ---
    
    // Chart 1: Pie Chart for JLPT Levels (UPDATED DATA)
    const jlptCtx = document.getElementById('jlptPieChart').getContext('2d');
    const jlptPieChart = new Chart(jlptCtx, {
        type: 'pie',
        data: {
            labels: ['N1', 'N2', 'その他'],
            datasets: [{
                label: '日本語能力',
                data: [62, 28, 10],
                backgroundColor: ['#003366', '#00A99D', '#FFC107'],
                borderColor: '#FFFBEB',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.label}: ${context.raw}%`
                    }
                }
            }
        }
    });

    // Chart 2: Bar Chart for Nationalities
    const nationalityCtx = document.getElementById('nationalityBarChart').getContext('2d');
    const nationalityBarChart = new Chart(nationalityCtx, {
        type: 'bar',
        data: {
            labels: ['中国', '韓国', 'ベトナム', 'インド', 'ミャンマー', 'その他'],
            datasets: [{
                label: '国籍',
                data: [35, 20, 18, 10, 7, 10],
                backgroundColor: 'rgba(0, 169, 157, 0.7)',
                borderColor: '#00A99D',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { x: { beginAtZero: true } }
        }
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