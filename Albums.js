
document.addEventListener('DOMContentLoaded', () => {
 
  
let currentMusic =0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');


playBtn.addEventListener('click',() =>{
    if (playBtn.classList.contains('pause')) {           //if (playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

//setup music
const setMusic = (i) => { 
    seekBar.value = 0;
    let song = songs[i];  //initially ()
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    //disk.style.backgroundImage = `url('${song.cover}')`;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);

//formatting time in min and seconds format

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min <10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10){
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}

//seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML= formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        forwardBtn.click();
    }
},500)

seekBar.addEventListener('change', () =>{
    music.currentTime = seekBar.value;
})

const playMusic = () =>{
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}

//forward and backward button
forwardBtn.addEventListener('click', () =>{
    if(currentMusic >= songs.length -1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click', () =>{
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
    playMusic();
})

//Player 2
let currentMusic2 =0;

const music2 = document.querySelector('#audio2');
const seekBar2 = document.querySelector('.seek-bar2');
const songName2 = document.querySelector('.music-name2');
const artistName2 = document.querySelector('.artist-name2');
const disk2 = document.querySelector('.disk2');
const currentTime2 = document.querySelector('.current-time2');
const musicDuration2 = document.querySelector('.song-duration2');
const playBtn2 = document.querySelector('.play-btn2');
const forwardBtn2 = document.querySelector('.forward-btn2');
const backwardBtn2 = document.querySelector('.backward-btn2');


playBtn2.addEventListener('click',() =>{
    if (playBtn2.classList.contains('pause')) {           //if (playBtn2.className.includes('pause')){
        music2.play();
    }else{
        music2.pause();
    }
    playBtn2.classList.toggle('pause');
    disk2.classList.toggle('play');
})

//setup music
const setMusic2 = (i) => { 
    seekBar2.value = 0;
    let song2 = songs2[i]; 
    currentMusic2 = i;
    music2.src = song2.path;

    songName2.innerHTML = song2.name;
    artistName2.innerHTML = song2.artist;
    disk2.style.backgroundImage = `url('${song2.cover}')`;

    currentTime2.innerHTML = '00:00';
    setTimeout(() => {
        seekBar2.max = music2.duration;  
        musicDuration2.innerHTML = formatTime2(music2.duration); 
    }, 300);
}

setMusic2(0);

//formatting time in min and seconds format

const formatTime2 = (time) => {
    let min2 = Math.floor(time / 60);
    if (min2 < 10) {
        min2 = `0${min2}`;
    }
    let sec2 = Math.floor(time % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    return `${min2}:${sec2}`;
}


//seek bar
setInterval(() => {
    seekBar2.value = music2.currentTime;
    currentTime2.innerHTML= formatTime2(music2.currentTime);
    if(Math.floor(music2.currentTime) == Math.floor(seekBar2.max)){
        forwardBtn2.click();
    }
},500)

seekBar2.addEventListener('change', () =>{
    music2.currentTime = seekBar2.value;
})

const playMusic2 = () =>{
    music2.play();
    playBtn2.classList.remove('pause');
    disk2.classList.add('play');
}

//forward and backward button
forwardBtn2.addEventListener('click', () =>{
    if(currentMusic2 >= songs2.length -1){
        currentMusic2 = 0;
    } else{
        currentMusic2++;
    }
    setMusic2(currentMusic2);
    playMusic2();
})

backwardBtn2.addEventListener('click', () =>{
    if(currentMusic2 <= 0){
        currentMusic2 = songs2.length -1;
    } else{
        currentMusic2--;
    }
    setMusic2(currentMusic2);
    playBtn2.click();
    playMusic2();
});

//Player 3

let currentMusic3 =0;

const music3 = document.querySelector('#audio3');
const seekBar3 = document.querySelector('.seek-bar3');
const songName3 = document.querySelector('.music-name3');
const artistName3 = document.querySelector('.artist-name3');
const disk3 = document.querySelector('.disk3');
const currentTime3 = document.querySelector('.current-time3');
const musicDuration3 = document.querySelector('.song-duration3');
const playBtn3 = document.querySelector('.play-btn3');
const forwardBtn3 = document.querySelector('.forward-btn3');
const backwardBtn3 = document.querySelector('.backward-btn3');



playBtn3.addEventListener('click',() =>{
    if (playBtn3.classList.contains('pause')) {           //if (playBtn3.className.includes('pause')){
        music3.play();
    }else{
        music3.pause();
    }
    playBtn3.classList.toggle('pause');
    disk3.classList.toggle('play');
})

//setup music
const setMusic3 = (i) => { 
    seekBar3.value = 0;
    let song3 = songs3[i]; 
    currentMusic3 = i;
    music3.src = song3.path;

    songName3.innerHTML = song3.name;
    artistName3.innerHTML = song3.artist;
    disk3.style.backgroundImage = `url('${song3.cover}')`;

    currentTime3.innerHTML = '00:00';
    setTimeout(() => {
        seekBar3.max = music3.duration;  
        musicDuration3.innerHTML = formatTime3(music3.duration); 
    }, 300);
}

setMusic3(0);

//formatting time in min and seconds format

const formatTime3 = (time) => {
    let min3 = Math.floor(time / 60);
    if (min3 < 10) {
        min3 = `0${min3}`;
    }
    let sec3 = Math.floor(time % 60);
    if (sec3 < 10) {
        sec3 = `0${sec3}`;
    }
    return `${min3}:${sec3}`;
}


//seek bar
setInterval(() => {
    seekBar3.value = music3.currentTime;
    currentTime3.innerHTML= formatTime3(music3.currentTime);
    if(Math.floor(music3.currentTime) == Math.floor(seekBar3.max)){
        forwardBtn3.click();
    }
},500)

seekBar3.addEventListener('change', () =>{
    music3.currentTime = seekBar3.value;
})

const playMusic3 = () =>{
    music3.play();
    playBtn3.classList.remove('pause');
    disk3.classList.add('play');
}

//forward and backward button
forwardBtn3.addEventListener('click', () =>{
    if(currentMusic3 >= songs3.length -1){
        currentMusic3 = 0;
    } else{
        currentMusic3++;
    }
    setMusic3(currentMusic3);
    playMusic3();
})

backwardBtn3.addEventListener('click', () =>{
    if(currentMusic3 <= 0){
        currentMusic3 = songs3.length -1;
    } else{
        currentMusic3--;
    }
    setMusic3(currentMusic3);
    playBtn3.click();
    playMusic3();
})

//Player 4

let currentMusic4 =0;

const music4 = document.querySelector('#audio4');
const seekBar4 = document.querySelector('.seek-bar4');
const songName4 = document.querySelector('.music-name4');
const artistName4 = document.querySelector('.artist-name4');
const disk4 = document.querySelector('.disk4');
const currentTime4 = document.querySelector('.current-time4');
const musicDuration4 = document.querySelector('.song-duration4');
const playBtn4 = document.querySelector('.play-btn4');
const forwardBtn4 = document.querySelector('.forward-btn4');
const backwardBtn4 = document.querySelector('.backward-btn4');



playBtn4.addEventListener('click',() =>{
    if (playBtn4.classList.contains('pause')) {           //if (playBtn3.className.includes('pause')){
        music4.play();
    }else{
        music4.pause();
    }
    playBtn4.classList.toggle('pause');
    disk4.classList.toggle('play');
})

//setup music
const setMusic4 = (i) => { 
    seekBar4.value = 0;
    let song4 = songs4[i]; 
    currentMusic4 = i;
    music4.src = song4.path;

    songName4.innerHTML = song4.name;
    artistName4.innerHTML = song4.artist;
    disk4.style.backgroundImage = `url('${song4.cover}')`;

    currentTime4.innerHTML = '00:00';
    setTimeout(() => {
        seekBar4.max = music4.duration;  
        musicDuration4.innerHTML = formatTime3(music4.duration); 
    }, 300);
}

setMusic4(0);

//formatting time in min and seconds format

const formatTime4 = (time) => {
    let min4 = Math.floor(time / 60);
    if (min4 < 10) {
        min4 = `0${min4}`;
    }
    let sec4 = Math.floor(time % 60);
    if (sec4 < 10) {
        sec4 = `0${sec4}`;
    }
    return `${min4}:${sec4}`;
}


//seek bar
setInterval(() => {
    seekBar4.value = music4.currentTime;
    currentTime4.innerHTML= formatTime4(music4.currentTime);
    if(Math.floor(music4.currentTime) == Math.floor(seekBar4.max)){
        forwardBtn4.click();
    }
},500)

seekBar4.addEventListener('change', () =>{
    music4.currentTime = seekBar4.value;
})

const playMusic4 = () =>{
    music4.play();
    playBtn4.classList.remove('pause');
    disk4.classList.add('play');
}

//forward and backward button
forwardBtn4.addEventListener('click', () =>{
    if(currentMusic4 >= songs4.length -1){
        currentMusic4 = 0;
    } else{
        currentMusic4++;
    }
    setMusic4(currentMusic4);
    playMusic4();
})

backwardBtn4.addEventListener('click', () =>{
    if(currentMusic4 <= 0){
        currentMusic4 = songs4.length -1;
    } else{
        currentMusic4--;
    }
    setMusic4(currentMusic4);
    playBtn4.click();
    playMusic4();
})
});

let currentMusic5 =0;

const music5 = document.querySelector('#audio5');
const seekBar5 = document.querySelector('.seek-bar5');
const songName5 = document.querySelector('.music-name5');
const artistName5 = document.querySelector('.artist-name5');
const disk5 = document.querySelector('.disk5');
const currentTime5 = document.querySelector('.current-time5');
const musicDuration5 = document.querySelector('.song-duration5');
const playBtn5 = document.querySelector('.play-btn5');
const forwardBtn5 = document.querySelector('.forward-btn5');
const backwardBtn5 = document.querySelector('.backward-btn5');



playBtn5.addEventListener('click',() =>{
    if (playBtn5.classList.contains('pause')) {           //if (playBtn3.className.includes('pause')){
        music5.play();
    }else{
        music5.pause();
    }
    playBtn5.classList.toggle('pause');
    disk5.classList.toggle('play');
})

//setup music
const setMusic5 = (i) => { 
    seekBar5.value = 0;
    let song5 = songs5[i]; 
    currentMusic5 = i;
    music5.src = song5.path;

    songName5.innerHTML = song5.name;
    artistName5.innerHTML = song5.artist;
    disk5.style.backgroundImage = `url('${song5.cover}')`;

    currentTime5.innerHTML = '00:00';
    setTimeout(() => {
        seekBar5.max = music5.duration;  
        musicDuration5.innerHTML = formatTime5(music5.duration); 
    }, 300);
}

setMusic5(0);

//formatting time in min and seconds format

const formatTime5 = (time) => {
    let min5 = Math.floor(time / 60);
    if (min5 < 10) {
        min5 = `0${min5}`;
    }
    let sec5 = Math.floor(time % 60);
    if (sec5 < 10) {
        sec5 = `0${sec5}`;
    }
    return `${min5}:${sec5}`;
}


//seek bar
setInterval(() => {
    seekBar5.value = music5.currentTime;
    currentTime5.innerHTML= formatTime5(music5.currentTime);
    if(Math.floor(music5.currentTime) == Math.floor(seekBar5.max)){
        forwardBtn5.click();
    }
},500)

seekBar5.addEventListener('change', () =>{
    music5.currentTime = seekBar5.value;
})

const playMusic5 = () =>{
    music5.play();
    playBtn5.classList.remove('pause');
    disk5.classList.add('play');
}


//forward and backward button
forwardBtn5.addEventListener('click', () =>{
    if(currentMusic5 >= songs5.length -1){
        currentMusic5 = 0;
    } else{
        currentMusic5++;
    }
    setMusic5(currentMusic5);
    playMusic5();
})

backwardBtn5.addEventListener('click', () =>{
    if(currentMusic5 <= 0){
        currentMusic5 = songs5.length -1;
    } else{
        currentMusic5--;
    }
    setMusic5(currentMusic5);
    playBtn5.click();
    playMusic5();
})

//Player6
let currentMusic6 =0;

const music6 = document.querySelector('#audio6');
const seekBar6 = document.querySelector('.seek-bar6');
const songName6 = document.querySelector('.music-name6');
const artistName6 = document.querySelector('.artist-name6');
const disk6 = document.querySelector('.disk6');
const currentTime6 = document.querySelector('.current-time6');
const musicDuration6 = document.querySelector('.song-duration6');
const playBtn6 = document.querySelector('.play-btn6');
const forwardBtn6 = document.querySelector('.forward-btn6');
const backwardBtn6 = document.querySelector('.backward-btn6');


playBtn6.addEventListener('click',() =>{
    if (playBtn6.classList.contains('pause')) {           //if (playBtn3.className.includes('pause')){
        music6.play();
    }else{
        music6.pause();
    }
    playBtn6.classList.toggle('pause');
    disk6.classList.toggle('play');
})

//setup music
const setMusic6 = (i) => { 
    seekBar6.value = 0;
    let song6 = songs6[i]; 
    currentMusic6 = i;
    music6.src = song6.path;

    songName6.innerHTML = song6.name;
    artistName6.innerHTML = song6.artist;
    disk6.style.backgroundImage = `url('${song6.cover}')`;

    currentTime6.innerHTML = '00:00';
    setTimeout(() => {
        seekBar6.max = music6.duration;  
        musicDuration6.innerHTML = formatTime6(music6.duration); 
    }, 300);
}

setMusic6(0);

//formatting time in min and seconds format

const formatTime6 = (time) => {
    let min6 = Math.floor(time / 60);
    if (min6 < 10) {
        min6 = `0${min6}`;
    }
    let sec6 = Math.floor(time % 60);
    if (sec6 < 10) {
        sec6 = `0${sec6}`;
    }
    return `${min6}:${sec6}`;
}


//seek bar
setInterval(() => {
    seekBar6.value = music6.currentTime;
    currentTime6.innerHTML = formatTime6(music6.currentTime); // Use formatTime6
    if (Math.floor(music6.currentTime) == Math.floor(seekBar6.max)) {
        forwardBtn6.click();
    }
}, 500);

seekBar6.addEventListener('change', () =>{
    music6.currentTime = seekBar6.value;
})

const playMusic6 = () =>{
    music6.play();
    playBtn6.classList.remove('pause');
    disk6.classList.add('play');
}

//forward and backward button
forwardBtn6.addEventListener('click', () =>{
    if(currentMusic6 >= songs6.length -1){
        currentMusic6 = 0;
    } else{
        currentMusic6++;
    }
    setMusic6(currentMusic6);
    playMusic6();
})

backwardBtn6.addEventListener('click', () =>{
    if(currentMusic6 <= 0){
        currentMusic6 = songs6.length -1;
    } else{
        currentMusic6--;
    }
    setMusic6(currentMusic6);
    playBtn6.click();
    playMusic6();
});