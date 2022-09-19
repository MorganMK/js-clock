const timeUI = document.getElementById("time")
let time = ``

function displayTime() {
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  if(hour < 10) {
    hour = "0" + hour
  }
  if(minute < 10) {
    minute = "0" + minute
  }
  if(second < 10) {
    second = "0" + second
  }


  time = `${hour} : ${minute} : ${second}`
  timeUI.innerHTML = time
}

setInterval(displayTime,1000)
