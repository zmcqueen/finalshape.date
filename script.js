function calculateTimeRemaining() {
    const now = new Date();
    // Adjust for PST time zone (-7 hours from UTC in June)
    const targetDate = new Date('2024-06-04T17:00:00Z'); // 10am PST is 5pm UTC

    const timeDiff = targetDate - now;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
        daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function calculatePercentageOfYear(days) {
    return ((days / 365) * 100).toFixed(2);
}

function displayCountdown() {
    const timeRemaining = calculateTimeRemaining();
    const percentage = calculatePercentageOfYear(timeRemaining.daysRemaining);

    document.getElementById('days-remaining').innerText = timeRemaining.daysRemaining + " days";
    document.getElementById('percentage-year').innerText = "which is " + percentage + "% of a calendar year.";
    document.getElementById('exact-countdown').innerText = timeRemaining.daysRemaining + " days, " + timeRemaining.hours + " hours, " +
        timeRemaining.minutes + " minutes, " + timeRemaining.seconds + " seconds";
}

// Update the countdown every second
setInterval(displayCountdown, 1000);

// Initialize
displayCountdown();
