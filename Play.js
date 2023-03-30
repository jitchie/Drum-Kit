import { Sound } from "./sounds.js";
import { Effects } from "./Efx.js";

const drum = new Sound();
const efx = new Effects();

export function HandleKeyEvent(event, audioEl){
  const src = audioEl.getAttribute('src');
  const parts = src.split('/');
  const sound = parts[2].replace(".wav", '');
  const eventType = event.type;
  if(eventType == "keydown"){
    efx.add(audioEl)
    drum.play(sound)
  } else {
    efx.remove(audioEl)
  }

}