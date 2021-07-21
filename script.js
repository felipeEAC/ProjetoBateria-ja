document.body.addEventListener('keyup',(event)=> {
         // console.log(event.code);                  //ler as teclas digitadas pelo usuario no console
        playSound(event.code.toLowerCase());
    });
document.querySelector('.composer button').addEventListener('click',() => {
    let song = document.querySelector('#input').value;
    //console.log("Musica", song); // exibe no console as letras digitadas
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
        // console.log(songArray);         //ler as teclas digitadas pelo usuario no console
    }

})
function playSound(sound){
    // let audioElement = document.querySelector('#s_keyw'); //seleciona o elemento de audio
    let audioElement = document.querySelector(`#s_${sound}`); //a variavel recebe um valor dinamico
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');


        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0; 

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
        
    }
}