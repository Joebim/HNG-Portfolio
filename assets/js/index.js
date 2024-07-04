const time = document.getElementById("time")
const day = document.getElementById("day")



const currentDate = new Date(Date.now());

const Week = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const currentDay = Week[currentDate.getDay()];

const currentTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

time.textContent = `${currentTime}`

day.textContent = `${currentDay}`
