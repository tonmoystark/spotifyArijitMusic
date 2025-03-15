console.log("welcome to spotify");
//initializing variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let myProgress = document.querySelector("#myProgressBar");
let gif = document.querySelector(".gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songName = document.querySelectorAll(".songName");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let songChanger = document.querySelector(".songNameChanger");

let songs = [
    {songName: "Pal kaisa pal", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "Soch na sake", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "Tum hi ho", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "Kabhi jo badal barse", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "Muskurane (Romantic)", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "Shayad (Love Aj Kal)", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "Ae Dil Hai Mushkil", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "Loo Man Liya", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "Yaad Hai Na", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: "Pachtaoge", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg"},
]

songItems.forEach((el, i) => {
    el.getElementsByTagName("img")[0].src = songs[i].coverPath;
    el.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

previousBtn.addEventListener("click", () => {
    if(songIndex <=0){
        songIndex = 0;
    }else{
        songIndex -= 1
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
        songChanger.innerText = songs[songIndex].songName;
});
nextBtn.addEventListener("click", () => {
    if(songIndex >=9){
        songIndex = 0;
    }else{
        songIndex += 1
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
        songChanger.innerText = songs[songIndex].songName;
});


//handle play pause
masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
        songChanger.innerText = songs[songIndex].songName;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener("timeupdate", ()=>{
    //updateSeekBar
    progress = parseInt(audioElement.currentTime / audioElement.duration*100);
    myProgress.value = progress;
})

myProgress.addEventListener("change", () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((el) => {
        el.classList.add("fa-play");
        el.classList.remove("fa-pause");
    })
}

Array.from(document.querySelectorAll(".songItemPlay").forEach((el) => {
    el.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `./songs/${songIndex + 1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
        songChanger.innerText = songs[songIndex].songName;
 } )
})
);

