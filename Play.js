import { Sound } from "./sounds.js";

const drum = new Sound();

export function HandleKeyDown(event, element){
  const src = element.getAttribute('src');
  const parts = src.split('/');
  const sound = parts[2].replace(".wav", '');
  const eventType = event.type;

  if(eventType == "keydown"){
    drum.play(sound)
  }  
}