function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}
	
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
	document.getElementById("mySidenav2").style.width = "300px";
}
    
function closeNav2() {
	document.getElementById("mySidenav2").style.width = "0";
}

// let boton = document.querySelector(".reproductor")

//     boton.addEventListener("click", () => {
//       let paradise = document.createElement("audio")
//       paradise.setAttribute("src", "sonido.mp3")
//       paradise.play();
//     })

    // let boton = document.querySelector(".reproductor")

    // boton.addEventListener("keydown ", () => {
    //   if(event.code == "keyZ"& (event.ctrlKey || event.metaKey));
    //   let paradise = document.createElement("audio")
    //   paradise.setAttribute("src", "sonido.mp3")
    //   paradise.play();
    // })

const audio_1 = new Audio();
audio_1.src = "/sounds/KSHMR_Acoustic_Kick_01_Big.wav";

const audio_2 = new Audio();
audio_2.src = "/sounds/KSHMR_Acoustic_Snare_01_A.wav";

const audio_3 = new Audio();
audio_3.src = "/sounds/KSHMR_Acoustic_Closed_Hat_01_Clean.wav";

const audio_4 = new Audio();
audio_4.src = "/sounds/KSHMR_Acoustic_Tom_16_High_E.wav";

const audio_5 = new Audio();
audio_5.src = "/sounds/KSHMR_Acoustic_Tom_07_Medium_A.wav";

const audio_6 = new Audio();
audio_6.src = "/sounds/KSHMR_Acoustic_Tom_01_Low_B.wav";

const audio_7 = new Audio();
audio_7.src = "/sounds/KSHMR_Acoustic_Crash_01.wav";

const audio_8 = new Audio();
audio_8.src = "/sounds/KSHMR_Acoustic_Crash_02.wav";

const audio_9 = new Audio();
audio_9.src = "/sounds/KSHMR_Acoustic_Ride_01.wav";

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Kick_01_Big.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyS' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Snare_01_A.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyD' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Closed_Hat_01_Clean.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyE' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Tom_01_Low_B.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyW' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Tom_07_Medium_A.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyQ' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Tom_16_High_E.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyR' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Crash_01.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyT' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Crash_02.wav")
  paradise.play();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyF' ) {
    let paradise = document.createElement("audio")
  paradise.setAttribute("src", "/sounds/KSHMR_Acoustic_Ride_01.wav")
  paradise.play();
  }
});