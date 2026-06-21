<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CINEMAGIC - Payment</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="index.html" style="text-decoration: none;"><h1 class="logo">CINEMAGIC</h1></a>
                <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="index.html">Movies</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>

    
    <section class="payment-section">
        <div class="container">
            <h2 class="section-title">Payment</h2>
            <div class="underline"></div>

            <div class="payment-container">
                
                <div class="payment-summary">
                    <h3>Booking Summary</h3>
                    <div id="booking-summary-content">
                        
                    </div>
                </div>

                
                <div class="payment-method">
                    <h3>Payment Method</h3>
                    <div id="payment-method-content">
                        
                    </div>

                    <div class="form-group">
                        <label for="customer-name">Your Name <span class="required">*</span></label>
                        <input 
                            type="text" 
                            id="customer-name" 
                            class="form-input"
                            placeholder="Enter your full name"
                        >
                        <span id="name-error" class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="customer-phone">Phone Number <span class="required">*</span></label>
                        <input 
                            type="tel" 
                            id="customer-phone" 
                            class="form-input"
                            placeholder="Enter your phone number"
                        >
                        <span id="phone-error" class="error-message"></span>
                    </div>

                    <div class="form-group">
                        <label for="transaction-id">Transaction ID <span class="required">*</span></label>
                        <input 
                            type="text" 
                            id="transaction-id" 
                            class="form-input"
                            placeholder="Enter your transaction ID"
                        >
                        <span id="transaction-error" class="error-message"></span>
                    </div>

                    <button class="btn btn-primary btn-large" onclick="confirmBooking()">Confirm Booking</button>
                </div>
            </div>
        </div>
    </section>

    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 CINEMAGIC. All rights reserved.</p>
        </div>
    </footer>

    
    <script src="script.js"></script>
    <script>
        let jsonData = null;

        document.addEventListener('DOMContentLoaded', async function() {
            jsonData = await loadJSONData();
            if (jsonData) {
                displayBookingSummary(jsonData);
                displayPaymentMethod(jsonData);
                updateUIFromJSON(jsonData);
            }
        });
        function displayBookingSummary(data) {
            const movieId = parseInt(localStorage.getItem('selectedMovieId'));
            const movie = data.movies.find(m => m.id === movieId);
            const selectedDate = localStorage.getItem('selectedDate');
            const selectedTime = localStorage.getItem('selectedTime');
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats') || '[]');
            const totalPrice = localStorage.getItem('totalPrice');
            const currency = data.currency.symbol;

            document.getElementById('booking-summary-content').innerHTML = `
                <div class="summary-detail">
                    <strong>Movie:</strong> <span>${movie.name}</span>
                </div>
                <div class="summary-detail">
                    <strong>Date & Time:</strong> <span>${formatDate(selectedDate)} at ${selectedTime}</span>
                </div>
                <div class="summary-detail">
                    <strong>Selected Seats:</strong> <span>${selectedSeats.join(', ')}</span>
                </div>
                <div class="summary-detail">
                    <strong>Number of Tickets:</strong> <span>${selectedSeats.length}</span>
                </div>
                <div class="summary-detail total-detail">
                    <strong>Total Price:</strong> <span>${currency}${totalPrice}</span>
                </div>
            `;
        }
        function displayPaymentMethod(data) {
            const payment = data.payment;
            const totalPrice = localStorage.getItem('totalPrice');
            const currency = data.currency.symbol;

            const instructionsHTML = payment.paymentInstructions.map((instruction, index) => 
                `<li>${instruction}</li>`
            ).join('');

            document.getElementById('payment-method-content').innerHTML = `
                <div class="payment-option">
                    <div class="bkash-header">
                        <span class="bkash-logo">${payment.methodName}</span>
                    </div>
                    
                    <div class="payment-instructions">
                        <p><strong>Payment Instructions:</strong></p>
                        <ol>
                            ${instructionsHTML}
                        </ol>
                    </div>

                    <div class="bkash-number">
                        <strong>${payment.methodName} Number:</strong> 
                        <span class="highlight-number">${payment.bkashNumber}</span>
                    </div>

                    <div class="amount-display">
                        <strong>Amount to Send:</strong> 
                        <span class="highlight-amount">${currency}${totalPrice}</span>
                    </div>
                </div>
            `;
        }
        async function confirmBooking() {
            const customerName = document.getElementById('customer-name').value.trim();
            const customerPhone = document.getElementById('customer-phone').value.trim();
            const transactionId = document.getElementById('transaction-id').value.trim();
            
            const nameError = document.getElementById('name-error');
            const phoneError = document.getElementById('phone-error');
            const transactionError = document.getElementById('transaction-error');
            nameError.textContent = '';
            phoneError.textContent = '';
            transactionError.textContent = '';

            let isValid = true;
            if (!customerName) {
                nameError.textContent = 'Please enter your name';
                isValid = false;
            }
            if (!customerPhone) {
                phoneError.textContent = 'Please enter your phone number';
                isValid = false;
            }
            const minLength = jsonData.payment.transactionIdMinLength;
            if (!transactionId) {
                transactionError.textContent = 'Please enter the transaction ID';
                isValid = false;
            } else if (transactionId.length < minLength) {
                transactionError.textContent = `Transaction ID must be at least ${minLength} characters`;
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            const movieId = parseInt(localStorage.getItem('selectedMovieId'));
            const movie = jsonData.movies.find(m => m.id === movieId);
            const selectedDate = localStorage.getItem('selectedDate');
            const selectedTime = localStorage.getItem('selectedTime');
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats') || '[]');
            const totalPrice = localStorage.getItem('totalPrice');

            const confirmBtn = document.querySelector('.payment-method .btn-primary');
            const originalLabel = confirmBtn.textContent;
            confirmBtn.disabled = true;
            confirmBtn.textContent = 'Saving booking...';

            try {
                await submitBooking({
                    movieId,
                    date: selectedDate,
                    time: selectedTime,
                    seats: selectedSeats,
                    totalPrice: Number(totalPrice),
                    customerName,
                    customerPhone,
                    transactionId
                });

                localStorage.setItem('customerName', customerName);
                localStorage.setItem('customerPhone', customerPhone);
                localStorage.setItem('transactionId', transactionId);
                window.location.href = 'confirmation.html';
            } catch (err) {
                transactionError.textContent = err.message || 'Failed to save booking. Please try again.';
                confirmBtn.disabled = false;
                confirmBtn.textContent = originalLabel;
            }
        }
        function formatDate(dateString) {
            const date = new Date(dateString);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }
    </script>
</body>
</html>
