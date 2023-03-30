import { HandleKeyEvent } from "./Play.js";

document.addEventListener('keydown', (event)=>{
    const audio = document.querySelector(`audio[data-key="${event.key}"]`)
    if(!audio)return;
    HandleKeyEvent(event, audio);
});

document.addEventListener('keyup', (event)=>{
    const audio = document.querySelector(`audio[data-key="${event.key}"]`)
    if(!audio)return;
    HandleKeyEvent(event, audio);
});
