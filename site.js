console.log("Testing") 

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

function displayMessage(){
  const welcome = document.getElementById("welcome")
  if (isMorning){
    welcome.innerHTML = "Good morning!"
  } else if (isAfternoon){
    welcome.innerHTML = "Good afternoon!"
  } else {
    welcome.innerHTML = "Good evening!"
  }

  console.log("Welcome message displayed")
}

displayMessage()