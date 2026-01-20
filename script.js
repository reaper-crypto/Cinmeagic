



async function loadJSONData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to load data.json');
        }
        const data = await response.json();
        console.log('✅ Loaded data from JSON:', data);
        return data;
    } catch (error) {
        console.error('❌ Error loading JSON data:', error);
        alert('Failed to load application data. Please refresh the page.');
        return null;
    }
}



function updateUIFromJSON(data) {
    
    const websiteNameElement = document.getElementById('website-name');
    if (websiteNameElement && data.ui) {
        websiteNameElement.textContent = data.ui.websiteName;
    }

    
    if (data.ui && data.ui.seatColors) {
        document.documentElement.style.setProperty('--seat-available', data.ui.seatColors.available);
        document.documentElement.style.setProperty('--seat-selected', data.ui.seatColors.selected);
        document.documentElement.style.setProperty('--seat-booked', data.ui.seatColors.booked);
    }

    console.log('✅ UI updated from JSON configuration');
}




function formatCurrency(amount, data) {
    return `${data.currency.symbol}${amount.toFixed(2)}`;
}


function getMovieById(movieId, data) {
    return data.movies.find(m => m.id === movieId) || null;
}


function validateBookingData() {
    const required = ['selectedMovieId', 'selectedDate', 'selectedTime', 'selectedSeats', 'totalPrice'];
    const missing = required.filter(key => !localStorage.getItem(key));
    
    if (missing.length > 0) {
        console.error('❌ Missing booking data:', missing);
        return false;
    }
    
    return true;
}


function clearBookingData() {
    localStorage.clear();
    console.log('✅ Booking data cleared');
}


console.log('%c🎬 CINEMAGIC - JSON-Driven Booking System', 'color: #e50914; font-size: 16px; font-weight: bold;');
console.log('%cAll data loaded from data.json', 'color: #00d800;');
console.log('%cNo hardcoded values in JavaScript', 'color: #4a90e2;');



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            
            console.log('📧 Contact Form Submission:', formData);
            
            
            alert(`Thank you for contacting us, ${formData.name}! We'll get back to you soon at ${formData.email}.`);
            
            
            contactForm.reset();
        });
    }

    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
