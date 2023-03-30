import { keysArray } from "./Keys.js";
import { Sound } from "./sounds.js";

const drum = new Sound();

const keyMap = {
  'KeyA': 'clap',
  'KeyS': 'hihat',
  'KeyD': 'kick',
  'KeyF': 'openhat',
  'KeyG': 'boom',
  'KeyH': 'ride',
  'KeyJ': 'snare',
  'KeyK': 'tom',
  'KeyL': 'tink',
};



function play(event){
  const soundName = keyMap[event.code];
  if (soundName) {
    drum.play(soundName);
  }
}

function stop(event){
  const soundName = keyMap[event.code];
  if (soundName) {
    drum.stop(soundName);
  }
}

export function HandleKeyEvent(event){
    let typeOfEvent = event.type;
    let validate = validateKey(event);
    if(validate);
    if (typeOfEvent == "keydown"){
      play(event)
    } else{
      stop(event)
    }

}

function validateKey(event){
  let bool = false;
  let keyName = event.keyCode;
  for (let i = 0; i < keysArray.length; i++) {
    if (keysArray[i].getAttribute('data-key') == keyName) {
      bool = true
    } 
  };
  return bool;
}


