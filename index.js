/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(str){
  let greeting = document.getElementById('greeting')
  greeting.innerHTML = str
}

function greet(strtime){
  let timeArray = strtime.split(":")
  if(parseInt(timeArray[0])< 12){
     return "Good Morning";
  }else if(parseInt(timeArray[0])>=17){
     return "Good Evening";
  }else{
     return "Good Afternoon";
  }  
}
