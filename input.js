export class InputHandler {
    constructor(game) {
        this.game = game;
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
            } else if (e.key === 'd') {
                this.game.debug = !this.game.debug;
            }
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
        });
    }
}