// script.js
function updateDateTime() {
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.toISOString().substr(11, 8);

    currentDayOfTheWeekElement.textContent = dayOfWeek;
    currentUTCTimeElement.textContent = utcTime;
}

// Update real-time elements every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();


