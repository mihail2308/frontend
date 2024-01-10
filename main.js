let countDown ;
const timerDisplay = document.querySelector(".timer_display-left")
const endTime = document.querySelector(".timer_display-end")
const timerForm = document.querySelector("#form")

 const buttons = document.querySelectorAll("[data-time]")

console.log(timerForm);
function timer (seconds){
    clearInterval(countDown)

    const currentTime = Date.now()
    const endTime = currentTime + seconds * 1000
    displayTimer(seconds);

    countDown = setInterval(() => {
    const secondLeft = Math.round((endTime - Date.now()) / 1000);
 
        if (secondLeft <= 0) {
        clearInterval(countDown)
        return;
        }
     displayTimer (secondLeft)
     displayEndTime(endTime)

    },1000)
}
// timer()
// 
function displayTimer (seconds){
    const minutes = Math.floor(seconds / 60)
    const lostSeconds = seconds % 60

    const display = `${minutes}:${lostSeconds < 10 ? "0": ""}${lostSeconds}`
    timerDisplay.textContent = display
    console.log({minutes,lostSeconds});
}

function displayEndTime (timestamp){
const end = new Date(timestamp)
const hours = end.getHours()
const minutes = end.getMinutes()

endTime.textContent = `вернутся в ${hours}:${minutes < 10 ? "0":""}${minutes}`
}

function startTime() {
    console.log(this);
    const seconds = parseInt(this.dataset.time)
    timer(seconds);

    }
buttons.forEach(button => button.addEventListener("click",startTime))

timerForm.addEventListener('submit',function(e){
    e.preventDefault()
    const minutes =parseInt(this.minutes.value)
    timer(minutes * 60)
    this.reset()
    console.log(this.minutes.value);
  })

