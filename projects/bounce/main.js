const config = {
    type: Phaser.AUTO,
    width: 200,
    height: 200,
    backgroundColor: '#1d1d1d',
    scene: {
        preload,
        create,
        update
    }
};

let text;
let velocity = 200; // pixels per second
let direction = 1;

const game = new Phaser.Game(config);

function preload() {
    // No assets to load in this simple example
}

function create() {
    text = this.add.text(0, config.height / 2, 'Hello Phaser!', {
        font: '48px Arial',
        fill: '#ffffff'
    });
    text.setOrigin(0, 0.5); // align vertically centered
}

function update(time, delta) {
    const dt = delta / 1000; // convert from ms to seconds
    text.x += velocity * dt * direction;

    // Bounce logic
    if (text.x <= 0) {
        direction = 1;
    } else if (text.x + text.width >= config.width) {
        direction = -1;
    }
}