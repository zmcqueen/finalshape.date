function calculateDaysRemaining() {
    const now = new Date();
    const targetDate = new Date('2024-06-04');
    const timeDiff = targetDate - now;

    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining > 0 ? daysRemaining : 0;
}

function calculatePercentageOfYear(days) {
    // There are 365 days in a non-leap year
    return ((days / 365) * 100).toFixed(2);
}

function displayCountdown() {
    const days = calculateDaysRemaining();
    const percentage = calculatePercentageOfYear(days);

    document.getElementById('days-remaining').innerText = days + " days";
    document.getElementById('percentage-year').innerText = "which is " + percentage + "% of a calendar year.";
}

// Update the countdown every day (86400000 milliseconds)
setInterval(displayCountdown, 86400000);

// Initialize
displayCountdown();
