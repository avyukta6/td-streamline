// TD Streamline Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeLoanCalculator();
    initializeScrollEffects();
    initializeButtons();
});

// Loan Calculator
function initializeLoanCalculator() {
    const slider = document.getElementById('loanSlider');
    const loanAmount = document.getElementById('loanAmount');
    const monthlyPayment = document.getElementById('monthlyPayment');

    if (!slider) return;

    slider.addEventListener('input', (e) => {
        const amount = parseInt(e.target.value);
        loanAmount.textContent = '$' + amount.toLocaleString();
        updateMonthlyPayment(amount, monthlyPayment);
    });

    // Initialize with default value
    updateMonthlyPayment(parseInt(slider.value), monthlyPayment);
}

function updateMonthlyPayment(amount, displayElement) {
    // Simplified calculation: assume 12-month term, 6-8% interest
    const annualRate = 0.07; // 7% average
    const monthlyRate = annualRate / 12;
    const months = 12;

    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);

    const min = Math.round(monthlyPayment * 0.9);
    const max = Math.round(monthlyPayment * 1.15);

    displayElement.textContent = `$${min} - $${max}`;
}

// Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.feature-card, .personalization-card, .step').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Button Interactions
function initializeButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e, button);
        });
    });
}

function handleButtonClick(e, button) {
    const text = button.textContent.toLowerCase();
    
    if (text.includes('apply')) {
        showNotification('Redirecting to application form...', 'success');
        // In a real app, this would navigate to the application page
        setTimeout(() => {
            alert('Application form would open here.');
        }, 500);
    } else if (text.includes('start')) {
        showNotification('Opening TD Streamline...', 'success');
    } else if (text.includes('learn')) {
        scrollToSection('features');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#00A86B' : '#2196F3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .btn:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(style);

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle (if needed for responsive design)
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.createElement('button');
    
    if (window.innerWidth <= 768) {
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-dark);
            display: none;
        `;
        
        document.querySelector('.nav-container').appendChild(hamburger);
    }
}

// Initialize mobile menu on load
setupMobileMenu();

// Recalculate on window resize
window.addEventListener('resize', setupMobileMenu);
