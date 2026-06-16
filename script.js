let song = document.getElementById("song");

let isPlaying = false;


function playPause(){

    if(isPlaying==false){

        song.play();
        isPlaying=true;

    }
    else{

        song.pause();
        isPlaying=false;
    }

}


function next(){
    alert("Next Song Coming Soon 🎵");
}


function back(){
    alert("Previous Song Coming Soon 🎵");
}
    
