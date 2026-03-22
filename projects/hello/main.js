let game;

function createGame(width, height) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-container',
        width: width,
        height: height,
        scene: {
            create: function () {
                const text = this.add.text(width / 2, height / 2, 'Hello Phaser!', {
                    font: '24px Arial',
                    fill: '#fff'
                }).setOrigin(0.5);

                // Array of colors to cycle through
                const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'];
                let colorIndex = 0;

                // Create an infinite tween that cycles through colors
                this.tweens.add({
                    targets: { colorValue: 0 },
                    colorValue: 1,
                    duration: 500,
                    ease: 'Linear',
                    loop: -1,
                    onUpdate: (tween, target) => {
                        colorIndex = Math.floor(target.colorValue * colors.length) % colors.length;
                        text.setFill(colors[colorIndex]);
                    }
                });
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