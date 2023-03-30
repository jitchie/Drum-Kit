export class Sound {
    constructor(){
        this.sounds ={
            boom : new Audio('./assets/sounds/boom.wav'),
            clap : new Audio('./assets/sounds/clap.wav'),
            hihat : new Audio('./assets/sounds/hihat.wav'),
            openhat : new Audio('./assets/sounds/openhat.wav'),
            ride : new Audio('./assets/sounds/ride.wav'),
            kick : new Audio('./assets/sounds/kick.wav'),
            snare : new Audio('./assets/sounds/snare.wav'),
            tink : new Audio('./assets/sounds/tink.wav'),
            tom : new Audio('./assets/sounds/tom.wav')
        }
    }
        play(soundName) {
            if(this.sounds[soundName]){
                this.sounds[soundName].currentTime = 0;
                this.sounds[soundName].play()
            }
        }
        stop(soundName) {
            if(this.sounds[soundName]){
                this.sounds[soundName].pause()
                this.sounds[soundName].currentTime = 0;
            }
        }
    }








