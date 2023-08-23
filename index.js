const header = document.createElement('h1')
const counter = document.querySelector('.counter')
const launch =  new Date("Aug 31, 2023 20:00:00").getTime()
const container = document.querySelector('.counterContainer')
const getCurrentTime = setInterval(()=>{
    let currentTime = new Date().getTime();
    let timeRemaining = launch - currentTime
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    counter.textContent = `${days} days : ${hours}H : ${minutes}M : ${seconds}S`

    if (timeRemaining < 0) {
        clearInterval(getCurrentTime)
        counter.textContent = "It's Live!"
    }
},1000)

