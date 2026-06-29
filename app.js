  

setInterval(function(){

  var timer = document.getElementById("timer");
  var day = document.getElementById("day");
  var fullDate = document.getElementById("date");
     var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  timer.innerText = h + " : " + m + " : " + s;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  day.innerText = days[date.getDay()];

  fullDate.innerText =
  date.getDate() + " " +
  months[date.getMonth()] + " " +
  date.getFullYear();

},1000);

console.log("2");



var songs = [
  "palpal.mp3",
  "bairan.mp3",
];

var currentSong = 0;

var song = document.getElementById("song");

var songName = document.getElementById("songName");

song.src = songs[currentSong];

songName.innerText = songs[currentSong];



function playMusic(){

  if(song.paused){

    song.play();

  }
  else{

    song.pause();

  }

}



function nextSong(){

  currentSong++;

  if(currentSong >= songs.length){

    currentSong = 0;

  }

  song.src = songs[currentSong];

  songName.innerText = songs[currentSong];

  song.play();

}



function previousSong(){

  currentSong--;

  if(currentSong < 0){

    currentSong = songs.length - 1;

  }

  song.src = songs[currentSong];

  songName.innerText = songs[currentSong];

  song.play();

}



function changeColor(){

  var body = document.getElementById("body");

  var colors = [
    "linear-gradient(135deg,#0f172a,#1e293b,#111827)",
    "linear-gradient(135deg,#7c3aed,#312e81,#1e1b4b)",
    "linear-gradient(135deg,#065f46,#064e3b,#022c22)",
    "linear-gradient(135deg,#9f1239,#500724,#1f2937)",
    "linear-gradient(135deg,#ea580c,#7c2d12,#431407)"
  ];

  var randomColor =
  colors[Math.floor(Math.random() * colors.length)];

  body.style.background = randomColor;

}
