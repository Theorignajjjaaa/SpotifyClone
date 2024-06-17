let DefaultSongList = [
    {LOC:"songs/defaultAlb/1.mp3", COV:"cover/defaultAlb/1cover.jpg", SNAME:"Whishes", Artist:"Hasan Raheem"}, 
    {LOC:"songs/defaultAlb/2.mp3", COV:"cover/defaultAlb/2cover.jpg", SNAME:"Bachke Bachke", Artist:"Karan Aujla"}, 
    {LOC:"songs/defaultAlb/3.mp3", COV:"cover/defaultAlb/3cover.jpg", SNAME:"Hone Do Jo Hota Hai", Artist:"OAFF, Savera, Javed Akhtar"}, 
    {LOC:"songs/defaultAlb/4.mp3", COV:"cover/defaultAlb/4cover.jpg", SNAME:"Love Ya", Artist:"Diljit Dosanjh"},
    {LOC:"songs/defaultAlb/5.mp3", COV:"cover/defaultAlb/5cover.jpg", SNAME:"Mazaak", Artist:"Anuv Jain"}, 
    {LOC:"songs/defaultAlb/6.mp3", COV:"cover/defaultAlb/6cover.jpg", SNAME:"Lover", Artist:"Diljit Dosanjh"},
    {LOC:"songs/defaultAlb/7.mp3", COV:"cover/defaultAlb/7cover.jpg", SNAME:"Dil Se Dil Tak", Artist:"Akashdeep Sengupta"},
];

let Diljit_SongList = [
    {LOC:"songs/defaultAlb/4.mp3", COV:"cover/defaultAlb/4cover.jpg", SNAME:"Love Ya", Artist:"Diljit Dosanjh"},
    {LOC:"songs/defaultAlb/6.mp3", COV:"cover/defaultAlb/6cover.jpg", SNAME:"Lover", Artist:"Diljit Dosanjh"}
]

let Alia_SongList = [
    {LOC:"songs/defaultAlb/8.mp3", COV:"cover/defaultAlb/8cover.jpg", SNAME:"Maahi Ve", Artist:"A.R. Rahman"},
    {LOC:"songs/defaultAlb/9.mp3", COV:"cover/defaultAlb/8cover.jpg", SNAME:"Patakha Guddi", Artist:"Sultana, Jyoti Nooran"},
    {LOC:"songs/defaultAlb/10.mp3", COV:"cover/defaultAlb/10cover.jpg", SNAME:"Shaam Shaandaar", Artist:"Amit Trivedi"}
]

let Lofi_SongList = [
    {LOC:"songs/defaultAlb/5.mp3", COV:"cover/defaultAlb/5cover.jpg", SNAME:"Mazaak", Artist:"Anuv Jain"},
    {LOC:"songs/defaultAlb/8.mp3", COV:"cover/defaultAlb/8cover.jpg", SNAME:"Maahi Ve", Artist:"A.R. Rahman"},
    {LOC:"songs/defaultAlb/1.mp3", COV:"cover/defaultAlb/1cover.jpg", SNAME:"Whishes", Artist:"Hasan Raheem"}
     
]

let dinner_Time = [
    {LOC:"songs/defaultAlb/7.mp3", COV:"cover/defaultAlb/7cover.jpg", SNAME:"Dil Se Dil Tak", Artist:"Akashdeep Sengupta"},
    {LOC:"songs/defaultAlb/3.mp3", COV:"cover/defaultAlb/3cover.jpg", SNAME:"Hone Do Jo Hota Hai", Artist:"OAFF, Savera, Javed Akhtar"},
    {LOC:"songs/defaultAlb/6.mp3", COV:"cover/defaultAlb/6cover.jpg", SNAME:"Lover", Artist:"Diljit Dosanjh"},
]



let SongAlbum = [
    DefaultSongList, Diljit_SongList, Alia_SongList, Lofi_SongList, dinner_Time
]


let currentAudio = new Audio(SongAlbum[0][0].LOC);



//CONTANTS
let Ax = 0;
let nx = 0;
let state = "pause";

console.log(SongAlbum[Ax][0].SNAME,"  ",SongAlbum[Ax][0].Artist);

let Cover = document.querySelector(".tik");
let Songname = document.querySelector(".tcosong");
let Artistname = document.querySelector(".tcoArtis");


let playBut = document.querySelector('#ppb');
let playButcov = document.querySelector('.playbutton');

let progress = document.querySelector(".progress");
let progressbar = document.querySelector(".motter");

let presong = document.querySelector("#previous");
let nextsong = document.querySelector("#next");

// function chan(){
//     if (Ax === 1){
//         Ax = 0;
//     }else if (Ax === 0){
//         Ax = 1;
//     }
//     nx = 0;
//     update();
//     playS();
// }


function playS(){
    currentAudio.play();
    playBut.src = './assets/controll/play.svg';
    playButcov.style.backgroundColor = "#fff";
    state = "play";
}

function pausD(){
    currentAudio.pause();
    playBut.src = './assets/controll/pause.svg';
    playButcov.style.backgroundColor = "#fff";
    state = "pause";
}


function musicplay(){
    if (currentAudio.paused){
        playS();
    }
    else {
        pausD();
    }
    
}

currentAudio.addEventListener("timeupdate" ,()=>{
    progress.style.width = (currentAudio.currentTime/ currentAudio.duration)* 100 + "%";
})

progressbar.addEventListener("click" ,(e)=>{
    let Persong = ((e.offsetX/600)*100);
    console.log(Persong);
    progress.style.width = ((e.offsetX/600)*100+"%")
    currentAudio.currentTime = ((Persong/100)*currentAudio.duration)
})





//function of song update
function update(){
    currentAudio.pause();

    Songname.innerHTML = SongAlbum[Ax][nx].SNAME;
    Artistname.innerHTML = SongAlbum[Ax][nx].Artist;

    Cover.src = (SongAlbum[Ax][nx].COV)
    currentAudio.src = (SongAlbum[Ax][nx].LOC);
    return;
}

//next and previous song changer
presong.addEventListener("click", ()=>{
    nx=nx-1;
    if (nx === -1){
        nx = SongAlbum[Ax].length-1;
    }    
    console.log(nx);
    console.log("prvious");
    update();
    playS();
    
})



nextsong.addEventListener("click", ()=>{
    nx=nx+1;
    if (nx === SongAlbum[Ax].length){
        nx = 0;
    }  
    console.log("next");
    update();
    playS();
    
})

function playper(Albu,Songu){
    nx = Songu;
    Ax = Albu;
    update();
    playS();
}
update();