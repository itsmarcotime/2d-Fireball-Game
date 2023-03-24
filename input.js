export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e => {
            //if key is pressed && key is not a part of the keys array (-1 means not in index) then... 
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'
            ) && this.keys.indexOf(e.key) === -1) {
                //...push key into keys array
                this.keys.push(e.key);
            }
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
            console.log(e.key, this.keys);
        });
    }
}