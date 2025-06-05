// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate stats counters
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sectionsToObserve = document.querySelectorAll('.skills, .about-stats, .project-card, .timeline-item, .achievement-card');
    sectionsToObserve.forEach(section => {
        observer.observe(section);
    });

    // Animate Skill Bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            if (!bar.classList.contains('animated')) {
                const width = bar.style.width;
                bar.style.width = '0%';
                bar.classList.add('animated');
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            }
        });
    }

    // Animate Counter Numbers
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            if (!counter.classList.contains('animated')) {
                counter.classList.add('animated');
                const target = counter.textContent;
                const isPercentage = target.includes('%');
                const numericTarget = parseInt(target.replace(/\D/g, ''));
                
                let current = 0;
                const increment = numericTarget / 50; // Animation duration
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericTarget) {
                        current = numericTarget;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
                }, 40);
            }
        });
    }

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.type === 'submit') {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.transform = 'translateY(100px)';
        }
    });

    // Lazy loading for images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // Add CSS for mobile navigation when active
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                transition: left 0.3s ease;
                z-index: 999;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-toggle.active .bar:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .nav-toggle.active .bar:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active .bar:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
        
        .notification {
            animation: slideInRight 0.3s ease;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }
        
        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
    `;
    document.head.appendChild(style);

    // Add cursor following effect for larger screens
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.opacity = '0.7';
        });
        
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });
        
        // Enhance cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    console.log('🚀 Kashika\'s portfolio website loaded successfully!');

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 