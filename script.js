var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var time = new Date().getHours();


var updateClock = function() {


  var imageEventJs= document.getElementById("lolcat");
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

  var timeEventJs = document.getElementById("timeEvent");
  var messageText;

  if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  } else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time >= evening) {
    messageText = "Good Evening!";
  } else {
    messageText = "Good afternoon!";
  }

  timeEventJs.innerText = messageText;
  imageEventJs.src = image;

showCurrentTime();
}; /*end of updateClock function*/


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);



var partyTimeJs = document.getElementById("partyTimeButton");

var wakeUpTimeSelectorJs = document.getElementById("wakeUpTimeSelector");

var lunchTimeSelectorJs = document.getElementById("lunchTimeSelector");

var napTimeSelectorJs = document.getElementById("napTimeSelector");


var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
  
     partyTimeJs.innerText = "Party Over";
  
     partyTimeJs.style.backgroundColor = "#0A8DAB";
  }
   
    else {
      isPartyTime = false;
      time = new Date().getHours(); 

      partyTimeJs.innerText = "Party Time";
     
      partyTimeJs.style.backgroundColor = "black";
     
  
   }
};


var wakeUpEvent = function() {
  wakeupTime = wakeUpTimeSelectorJs.value;
  
};


var lunchEvent = function() {
  lunchTime = lunchTimeSelectorJs.value;
  
};


var napTimeEvent = function() {
  napTime = napTimeSelectorJs.value;
  
};


partyTimeJs.addEventListener("click", partyEvent);




wakeUpTimeSelectorJs.addEventListener('change', wakeUpEvent);





lunchTimeSelectorJs.addEventListener('change', lunchEvent);





napTimeSelectorJs.addEventListener('change', napTimeEvent);




