class FirstScene extends Phaser.Scene {

    constructor(config) {
        super(config);
    }
    
    preload() {
        console.log('tileset')
        this.load.image('tileset-image', 'assets/spritesheet_ground.png');
        
        
        this.load.tilemapTiledJSON('level', 'assets/level.json');
    }

    create() {
        this.map = this.make.tilemap({key: 'level'});

        this.map.tileset = this.map.addTilesetImage('floor', 'tileset-image');
        console.log(this.map.tileset);
        

        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        this.map.createStaticLayer('floor', this.map.tileset, 0, 0);
        this.map.createStaticLayer('floor2', this.map.tileset, 0, 0);
        

    }

    update() {
        
       
    }


}