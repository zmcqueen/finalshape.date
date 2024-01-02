import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeRemaining = () => {
        const now = new Date();
        const targetDate = new Date('2024-06-04T17:00:00Z'); // 10am PST
        const timeDiff = targetDate - now;

        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const percentageOfYear = ((days / 365) * 100).toFixed(2);
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return {
            days: days > 0 ? days : 0,
            percentageOfYear,
            hours,
            minutes,
            seconds
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p>{timeRemaining.days} days, which is {timeRemaining.percentageOfYear}% of a calendar year.</p>
            <p>Exact countdown: {timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds</p>
        </div>
    );
};

export default Countdown;
