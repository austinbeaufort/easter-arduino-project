const five = require('johnny-five');
const serial = require('serialport');

let board = new five.Board();

board.on('ready', function() {
    const ledArray = [];

    for (let i = 2; i <= 10; i++) {
        ledArray.push(new five.Led(i));
    }

    for (let item of ledArray) {
        item.blink(700);
    }

    setTimeout(() => {
        for (let item of ledArray) {
            item.stop().off();
        }
    }, 30000);
})