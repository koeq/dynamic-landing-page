// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
const  showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    // 12h Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    // Show every second
    setTimeout(showTime,1000);
}

// Add Zero
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting

// Run
showTime();
