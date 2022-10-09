function getTime(){
    const currentDate= new Date()
    const hour= currentDate.getHours()
    const minute= currentDate.getMinutes()
    const seconds= currentDate.getSeconds()
    // setTimeout(getTime,1000)
    //convert to degree since the clock hands has to rotate
    const hourDeg= (hour / 12) * 360 
    hourEl.style.transform= `rotate(${hourDeg}deg)`
    const minuteDeg= (minute / 60) * 360 
    minuteEl.style.transform= `rotate(${minuteDeg}deg)`
    const secondDeg= (seconds / 60) * 360 
    secondEl.style.transform= `rotate(${secondDeg}deg)`

}
const hourEl= document.querySelector('.hour')
const minuteEl= document.querySelector('.minute')
const secondEl= document.querySelector('.second')

// getTime()
// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setInterval(getTime, 1000)