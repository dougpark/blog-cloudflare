let game;

function createGame(width, height) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-container',
        width: width,
        height: height,
        scene: {
            create: function () {
                this.add.text(width / 2, height / 2, 'Hello Phaser!', {
                    font: '24px Arial',
                    fill: '#fff'
                }).setOrigin(0.5);
            }
        },
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        backgroundColor: '#1d1d1d'
    });
}

function resizeGame() {
    if (game) {
        game.destroy(true);
    }

    const wrapper = document.getElementById('game-wrapper');
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;
    game = createGame(width, height);
}

window.addEventListener('load', resizeGame);
window.addEventListener('resize', resizeGame);