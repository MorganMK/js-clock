const timeUI = document.getElementById("time")
let time = ``

function displayTime() {
  const date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let daynight = 'A.M'



  switch(hour) {
    case 12:
      daynight = 'P.M'
      break
    case 13:
      hour = '1'
      daynight = 'P.M'
      break
    case 14:
      hour = '2'
      daynight = 'P.M'
      break
    case 15:
      hour = '3'
      daynight = 'P.M'
      break
    case 16:
      hour = '4'
      daynight = 'P.M'
      break
    case 17:
      hour = '5'
      daynight = 'P.M'
      break
    case 18:
      hour = '6'
      daynight = 'P.M'
      break
    case 19:
      hour = '7'
      daynight = 'P.M'
      break
    case 20:
      hour = '8'
      daynight = 'P.M'
      break
    case 21:
      hour = '9'
      daynight = 'P.M'
      break
    case 22:
      hour = '10'
      daynight = 'P.M'
      break
    case 23:
      hour = '11'
      daynight = 'P.M'
      break
    case 24:
      hour = '0'
      daynight = 'A.M'
      break
  }

  let hourValue = hour.toLocaleString('en-US',{
    minimumIntegerDigits:2,
    useGrouping:false
  })
  let minuteValue = minute.toLocaleString('en-US',{
    minimumIntegerDigits:2,
    useGrouping:false
  })
  let secondValue = second.toLocaleString('en-US',{
    minimumIntegerDigits:2,
    useGrouping:false
  })

  time = `${hourValue} : ${minuteValue} : ${secondValue}  ${daynight}`
  timeUI.innerHTML = time
}

setInterval(displayTime,500)
