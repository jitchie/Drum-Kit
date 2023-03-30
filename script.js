import { HandleKeyDown } from "./Play.js";
document.addEventListener('keydown', (event)=>{
    const audio = document.querySelector(`audio[data-key="${event.key}"]`)
    if(!audio)return;
    HandleKeyDown(event, audio);
});
