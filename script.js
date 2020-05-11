// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    go = document.getElementById('go'),
    mainContainer = document.getElementById('main-container'),
    start = document.getElementById('start'),
    h1 = document.getElementById('h1'),
    errorMessage = document.getElementById('errorMessage');

// Show Time
const showTime = () => {
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
    setTimeout(showTime, 1000);
}

// Add Zero
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
const setBgGreet = () => {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../images/midday.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.color = "white";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../images/evening.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.color = "white";
        greeting.textContent = 'Good Evening';
    }
}

// Transition from start to main on button-click
go.addEventListener('click', () => {
    // Get input value
    const getName = document.getElementById('get-name').value;
    const getFocus = document.getElementById('get-focus').value;

    // Show error message on empty fields
    if (getName === "" || getFocus === "") {
        const errorText = errorMessage.innerHTML = "Please fill out the fields!";

        // Get text from input to the main site
    } else {
        start.style.display = "none";
        mainContainer.style.display = "flex";
        name.innerHTML = `, ${getName}!`;
        focus.innerHTML = `${getFocus}!`;

        // Save name and focus in local storage
        localStorage.setItem('name', getName);
        localStorage.setItem('focus', getFocus);
    }
});

// Get local storage
const getlocalStorage = () => {
    name.innerHTML = localStorage.getItem('name');
    focus.innerHTML = localStorage.getItem('focus');
}

// Initializing function
const onInit = () => {
    setBgGreet();
    getlocalStorage();
    showTime();
}

// Run
onInit();
