function currentDateTime() {
    let today = new Date();
    //get the month. we're adding one since js counts month staring at 0.
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let year = today.getFullYear();
    let session = "AM";

    //Getting 0 prepending to any single-digit values
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());

    if (hours > 12) {
        session = "PM";
    }

    let currentDate = `${month}/${date}/${year}`;
    document.getElementById("date").innerText = currentDate;

    let currentTime = `${hours}:${minutes}:${seconds} ${session}`;
    document.getElementById("time").innerText = currentTime;

    //updates every second
    setInterval(currentDateTime, 1000);
}

currentDateTime();
