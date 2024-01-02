function calculateDaysRemaining() {
    const now = new Date();
    const targetDate = new Date('2024-06-04');
    const timeDiff = targetDate - now;

    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining > 0 ? daysRemaining : 0;
}

function displayDaysRemaining() {
    const days = calculateDaysRemaining();
    document.getElementById('days-remaining').innerText = days + " days";
}

// Update the countdown every day (86400000 milliseconds)
setInterval(displayDaysRemaining, 86400000);

// Initialize
displayDaysRemaining();
