export class Effects {
    constructor(){
    }
    add(audioEl){
      const dataKey = audioEl.getAttribute('data-key');
      const htmlElement = document.querySelector(`div[data-key="${dataKey}`)
      htmlElement.classList.add("playing");
    }
    remove(audioEl){
        const dataKey = audioEl.getAttribute('data-key');
        const htmlElement = document.querySelector(`div[data-key="${dataKey}`)
        htmlElement.classList.remove("playing");
      }
    }
