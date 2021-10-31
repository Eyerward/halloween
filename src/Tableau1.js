/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-1','assets/level/background-2/bg2-terrain-1.png')
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-stone-5', 'assets/level/background-1/bg-stone-5.png');
        this.load.image('bg1-grass-4','assets/level/background-1/bg-grass-4.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-2.png');
        for (let j=1;j<=5;j++) {
            this.load.image('g-grass-'+j, 'assets/level/ground/g-grass-'+j+'.png');
        }

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=2;i++){
            this.load.image('g-spike-'+i, 'assets/level/ground/g-spike-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
        this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
        this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain1=this.add.image( 650, 80, 'bg2-terrain-1').setOrigin( 0, 0);
        bg2Terrain1.scale=1
        this.bg2Container.add(bg2Terrain1);


        let bg2Terrain2=this.add.image(-270,80, 'bg2-terrain-2').setOrigin(0,0);
        bg2Terrain2.scaleX=1.15
        bg2Terrain2.scaleX=1.10
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(40,-50, 'bg2-tree-1').setOrigin(0,0);
        bg2Tree1.scale=0.6
        this.bg2Container.add(bg2Tree1);
       // bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Tree2=this.add.image(350,-50,'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.scale=0.55
        this.bg2Container.add(bg2Tree2);

        let bg2Tree3=this.add.image(670,-30,'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.scale=0.7
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10;



        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain1=this.add.image(700,300, 'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1.scale=0.5
        this.bg1Container.add(bg1Terrain1);

        let bg1Terrain3=this.add.image(-450,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Stone5=this.add.image(600,460, 'bg1-stone-5').setOrigin(0,0);
        bg1Stone5.scaleX=2.5
        bg1Stone5.scaleY=2
        this.bg1Container.add(bg1Stone5);

        let bg1Grass4=this.add.image(600,400, 'bg1-grass-4').setOrigin(0,0);
        bg1Grass4.scale=2
        this.bg1Container.add(bg1Grass4);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        // let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);
        // tree1.setTintFill(0xFF0000); // pratique pour dbugger
        // this.groundContainer.add(tree1);
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        gMid1.scaleY=2;

        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid1.x+gMid1.width,355, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        gMid3.scaleX=1.2;
        /**
         * De l'herbe qui ne se répète pas
         *  @type {Phaser.GameObjects.Image}
         */

        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(390,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass3=this.add.image(390,310, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(390,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass5=this.add.image(390,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        // let spike=this.add.tileSprite(0,370,gMid3.x+gMid3.width,50,'g-spike-1').setOrigin(0,1)
        // this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        // let spike2=this.add.tileSprite(0,370,gMid3.x+gMid3.width,50,'g-spike-2').setOrigin(0,1)
        // this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
