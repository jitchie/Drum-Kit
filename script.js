// 1. hook up event listeners to the keys.
// 2. apply sound to keyDown event.
// 3. Change button style while keyEvent is active.
import { HandleKeyEvent } from "./Play.js";
document.addEventListener('keydown', HandleKeyEvent);
document.addEventListener('keyup', HandleKeyEvent);


