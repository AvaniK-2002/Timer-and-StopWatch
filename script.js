
    const timerBox = document.getElementById("timer");
    const stopwatchBox = document.getElementById("stopwatch");
    const toggleButton = document.getElementById("toggleButton");
    let timerInterval;
    let stopwatchInterval;

   
    timerBox.style.display = "block";
    stopwatchBox.style.display = "none";

    // Function to start the timer
   
const customTimeInput = document.getElementById("customTime");
const startButton = document.getElementById("startTimer");
const stopButton = document.getElementById("stopTimer");
const resetButton = document.getElementById("resetTimer");
const display = document.querySelector(".display");

let timer;
let timeLeft = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainderSeconds).padStart(2, "0")}`;
}

function updateDisplay() {
    display.textContent = formatTime(timeLeft);
}

startButton.addEventListener("click", function () {
    const customTime = parseInt(customTimeInput.value, 10);
    if (!isNaN(customTime) && customTime > 0) {
        timeLeft = customTime;
        updateDisplay();
        customTimeInput.disabled = true;
        if (!timer) {
            timer = setInterval(function () {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    timer = null;
                    alert("Timer has finished!");
                    customTimeInput.disabled = false;
                }
            }, 1000); 
        }
    } else {
        alert("Please enter a valid time in seconds.");
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    customTimeInput.disabled = false;
});

resetButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    timeLeft = 0;
    customTimeInput.value = "";
    customTimeInput.disabled = false;
    updateDisplay();
});


    // Function to start the stopwatch
    function startStopwatch() {
        clearInterval(timerInterval); 
        const display = stopwatchBox.querySelector(".display");
        const time = display.textContent.split(":").map(Number);
        let seconds = time[2];
        let minutes = time[1];
        let hours = time[0];

        stopwatchInterval = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            display.textContent = `${String(hours).padStart(2, "0")}:${String(
                minutes
            ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        }, 1000);
    }

    // Function to stop the stopwatch
    function stopStopwatch() {
        clearInterval(stopwatchInterval);
    }

    // Function to reset the stopwatch
    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchBox.querySelector(".display").textContent = "00:00:00";
    }

    
    document.getElementById("startTimer").addEventListener("click", startTimer);
    document.getElementById("stopTimer").addEventListener("click", stopTimer);
    document.getElementById("resetTimer").addEventListener("click", resetTimer);
    document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
    document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
    document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

    
    toggleButton.addEventListener("click", function () {
        if (timerBox.style.display === "block") {
            timerBox.style.display = "none";
            stopwatchBox.style.display = "block";
        } else {
            timerBox.style.display = "block";
            stopwatchBox.style.display = "none";
        }
    });

