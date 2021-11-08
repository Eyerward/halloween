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

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let b=1; b<=4;b++) {
            this.load.image('bg2-terrain-'+b, 'assets/level/background-2/bg2-terrain-'+b+'.png');
        }
        for(let e=1; e<=4;e++) {
            this.load.image('bg2-tree-' + e, 'assets/level/background-2/bg2-tree-' + e + '.png');
        }

        //bg 1 (gris légèrement flou)

        for(let f=1; f<=4;f++) {
            this.load.image('bg1-terrain-'+f, 'assets/level/background-1/bg-terrain-'+f+'.png');
        }

        for(let h=1;h<=3;h++) {
            this.load.image('bg1-tree-'+h, 'assets/level/background-1/bg-tree-'+h+'.png');
        }
        for(let k=1;k<=5;k++) {
            this.load.image('bg1-stone-'+k, 'assets/level/background-1/bg-stone-'+k+'.png');
        }
        for(let l=1;l<=5;l++) {
            this.load.image('bg1-grass-'+l, 'assets/level/background-1/bg-grass-'+ l +'.png');
        }
        this.load.image('bg-wooden-bridge','assets/level/background-1/bg-wooden-bridge.png');
        this.load.image('bg-fellentree','assets/level/background-1/bg-fellen-tree-2.png')

        //ground (premier plan noir)

        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gStone-2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gStone-4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gStone-5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gMush1','assets/level/ground/g-mushroom1.png');
        this.load.image('gBridge','assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2','assets/level/ground/g-box-2.png')
        for (let g=1;g<=3;g++){
            this.load.image('g-tree-'+g,'assets/level/ground/g-tree-'+g+'.png');
        }
        for (let j=1;j<=5;j++) {
            this.load.image('g-grass-'+j, 'assets/level/ground/g-grass-'+j+'.png');
        }
        this.load.image('gWater','assets/level/ground/g-water.png');
        this.load.image('gSpike-1','assets/level/ground/g-spike-1.png');
        this.load.image('gSpike-2','assets/level/ground/g-spike-2.png');

        this.load.image('gFallen','assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gDeadtree','assets/level/ground/g-fellen-tree-2.png');
        this.load.image('gBigstone','assets/level/ground/g-big-stone.png');


        //*********************ZOMBIES**************************
        for(let z=1;z<=16;z++){
            this.load.image('zombie'+z,'assets/zombies/z'+z+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent

        this.load.image('filterblood1', 'assets/level/filters/bloody/frame1.png');
        this.load.image('filterblood2', 'assets/level/filters/bloody/frame2.png');
        this.load.image('filterblood3', 'assets/level/filters/bloody/frame3.png');

        this.load.image('rain1','assets/level/weather/rain/frame1.png');
        this.load.image('rain2','assets/level/weather/rain/frame2.png');
        this.load.image('rain3','assets/level/weather/rain/frame3.png');

        this.load.image('snow1','assets/level/weather/snow/frame1.png');
        this.load.image('snow2','assets/level/weather/snow/frame2.png');
        this.load.image('snow3','assets/level/weather/snow/frame3.png');
        this.load.image('snow4','assets/level/weather/snow/frame4.png');
        this.load.image('snow5','assets/level/weather/snow/frame5.png');



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

        let bg2Terrain4=this.add.image(1400,80, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);

        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(40,-50, 'bg2-tree-1').setOrigin(0,0);
        bg2Tree1.scale=0.6
        this.bg2Container.add(bg2Tree1);

        let bg2Tree2=this.add.image(350,-50,'bg2-tree-2').setOrigin(0,0);
        bg2Tree2.scale=0.55
        this.bg2Container.add(bg2Tree2);

        let bg2Tree3=this.add.image(670,-30,'bg2-tree-3').setOrigin(0,0);
        bg2Tree3.scale=0.7
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10;

        let bg2Tree4=this.add.image(1700,-50, 'bg2-tree-2').setOrigin(0,0);
        bg2Tree4.scale=0.6
        this.bg2Container.add(bg2Tree4);

        let bg2Tree5=this.add.image(1900,-50, 'bg2-tree-1').setOrigin(0,0);
        bg2Tree5.scale=0.6
        this.bg2Container.add(bg2Tree5);

        let bg2Tree6=this.add.image(2050,-50, 'bg2-tree-3').setOrigin(0,0);
        bg2Tree6.scale=0.6
        this.bg2Container.add(bg2Tree6);



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

        let bg1Terrain1bis=this.add.image(800,200,'bg1-terrain-1').setOrigin(0,0);
        bg1Terrain1bis.scaleY=1.1
        this.bg1Container.add(bg1Terrain1bis);

        let bg1Bridge=this.add.image(1310,210,'bg-wooden-bridge').setOrigin(0,0);
        bg1Bridge.scaleX=1.1
        bg1Bridge.angle=-2
        this.bg1Container.add(bg1Bridge);

        let bg1Terrain4=this.add.image(1550,150, 'bg1-terrain-4').setOrigin(0,0);
        bg1Terrain4.scaleY=1.1
        this.bg1Container.add(bg1Terrain4);

        /**
         * Pierres, arbres et autres
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Stone5=this.add.image(600,460, 'bg1-stone-5').setOrigin(0,0);
        bg1Stone5.scaleX=2.5
        bg1Stone5.scaleY=2
        this.bg1Container.add(bg1Stone5);

        let bg1Grass4=this.add.image(600,400, 'bg1-grass-4').setOrigin(0,0);
        bg1Grass4.scale=2
        this.bg1Container.add(bg1Grass4);

        let bg1Tree1=this.add.image(-30,-60,'bg1-tree-1').setOrigin(0,0);
        bg1Tree1.scale=0.8
        this.bg1Container.add(bg1Tree1);

        let bg1Tree2=this.add.image(880,-80,'bg1-tree-2').setOrigin(0,0);
        bg1Tree2.angle=2
        bg1Tree2.flipX=true
        bg1Tree2.scale=0.8
        this.bg1Container.add(bg1Tree2);

        let bg1Tree3=this.add.image(160,-100,'bg1-tree-3').setOrigin(0,0);
        bg1Tree3.scale=0.7
        this.bg1Container.add(bg1Tree3);

        let bgTree4=this.add.image(1100,-50,'bg1-tree-3').setOrigin(0,0);
        bgTree4.scale=0.7
        this.bg1Container.add(bgTree4);

        let bgTree5=this.add.image(1800,-40,'bg1-tree-2').setOrigin(0,0);
        bgTree5.scale=0.7
        this.bg1Container.add(bgTree5);

        let bgTree6=this.add.image(2000,-40,'bg1-tree-2').setOrigin(0,0);
        bgTree6.scale=0.7
        this.bg1Container.add(bgTree6);

        let bgTree7=this.add.image(2200,250,'bg-fellentree').setOrigin(0,0);
        bgTree7.angle=-70
        this.bg1Container.add(bgTree7);



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
         * L'eau est là c'est laaaaaaaaaaa joie
         */

        let Z14=this.add.image(2500,300,'zombie14').setOrigin(0,0);
        Z14.scale=3
        this.groundContainer.add(Z14);

        let gWater=this.add.tileSprite(400,390,5000,300,'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);

        let gSpike1=this.add.tileSprite(310,450,5000,90,'gSpike-1').setOrigin(0,0);
        this.groundContainer.add(gSpike1);

        let gSpike2=this.add.tileSprite(400,450,5000,90,'gSpike-2').setOrigin(0,0);
        this.groundContainer.add(gSpike2);

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */

        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        gMid1.scaleY=2;

        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,355, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid2);
        gMid2.scaleX=1.2;

        /**
         * Terrain 3
         */

        let gLeft=this.add.image(750,360,'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);

        let gMid3=this.add.image(gLeft.x+gLeft.width,360,'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gRight=this.add.image(gMid3.x+gMid3.width,360,'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight);

        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */

        let gLeft2=this.add.image(1750,360,'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft2);

        let gMid4=this.add.image(gLeft2.x+gLeft2.width,360,'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid4);

        let gRight2=this.add.image(gMid4.x+gMid4.width,360,'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight2);

        /**
         * De l'herbe qui ne se répète pas
         *  @type {Phaser.GameObjects.Image}
         */

        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass3=this.add.image(120,310, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass5=this.add.image(200,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass2t2=this.add.image(750,340,'g-grass-2').setOrigin(0,0);
        gGrass2t2.scale=0.8
        this.groundContainer.add(gGrass2t2);

        let gGrass5t2=this.add.image(850,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5t2);

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */

        let mumut1=this.add.tileSprite(gLeft.x+gLeft.width,370,350,50,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(mumut1);

        let mumut2=this.add.tileSprite(gLeft.x+gLeft.width,370,350,50,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(mumut2);

        let mumut3=this.add.tileSprite(gLeft2.x+20,370,550,50,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(mumut3);

        let mumut4=this.add.tileSprite(gLeft2.x+20,370,500,50,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(mumut4);

        /**
         * Nos Petits arbrounets
         */

        let gTree1t1=this.add.image(20,-150,'g-tree-2').setOrigin(0,0);
        gTree1t1.flipX=true
        this.groundContainer.add(gTree1t1);

        let gTree2t1=this.add.image(270,-10,'g-tree-2').setOrigin(0,0);
        gTree2t1.scale=0.7
        this.groundContainer.add(gTree2t1);

        let gTree1t2=this.add.image(740,-50,'g-tree-1').setOrigin(0,0);
        gTree1t2.scaleY=1.2
        gTree1t2.angle=-15
        this.groundContainer.add(gTree1t2);

        /**
         * ZOMBIES ARE COMING
         */
        let Z6=this.add.image(600,285,'zombie6').setOrigin(0,0);
        Z6.scale=0.4
        this.groundContainer.add(Z6);

        let Z1=this.add.image(300,230,'zombie1').setOrigin(0,0);
        Z1.scale=0.8
        this.groundContainer.add(Z1);

        let Z2=this.add.image(800,230,'zombie2').setOrigin(0,0);
        Z2.scale=0.8
        this.groundContainer.add(Z2);

        let Z3=this.add.image(900,230,'zombie3').setOrigin(0,0);
        Z3.scale=0.8
        this.groundContainer.add(Z3);

        let Z4=this.add.image(1000,230,'zombie4').setOrigin(0,0);
        Z4.scale=0.8
        this.groundContainer.add(Z4);

        let Z5=this.add.image(1200,230,'zombie5').setOrigin(0,0);
        Z5.scale=0.8
        this.groundContainer.add(Z5);

        let Z10=this.add.image(1800,230,'zombie10').setOrigin(0,0);
        Z10.scale=0.8
        this.groundContainer.add(Z10);

        let Z11=this.add.image(2200,230,'zombie11').setOrigin(0,0);
        Z11.scale=0.8
        this.groundContainer.add(Z11);

        let Z12=this.add.image(2100,240,'zombie12').setOrigin(0,0);
        Z12.scale=0.8
        this.groundContainer.add(Z12);

        /**
         * Cailloux, Caisses, Champis...
         */

        let gStone4t1=this.add.image(350,340,'gStone-4').setOrigin(0,0);
        gStone4t1.scale=0.7
        this.groundContainer.add(gStone4t1);

        let gStone4t2=this.add.image(760,340,'gStone-4').setOrigin(0,0);
        this.groundContainer.add(gStone4t2);

        let gStone5=this.add.image(850,320,'gStone-5').setOrigin(0,0);
        gStone5.scaleY=1.5
        this.groundContainer.add(gStone5);

        let gMush=this.add.image(150,280,'gMush1').setOrigin(0,0);
        gMush.flipX=true
        this.groundContainer.add(gMush);

        let gMush2=this.add.image(1100,330,'gMush1').setOrigin(0,0);
        gMush2.scale=0.5
        this.groundContainer.add(gMush2);

        let gBridge=this.add.image(400,295,'gBridge').setOrigin(0,0);
        gBridge.scale=0.8
        gBridge.angle=-1
        this.groundContainer.add(gBridge);

        let gBox2=this.add.image(500,287,'gBox2').setOrigin(0,0);
        gBox2.scale=0.6
        gBox2.angle=3
        this.groundContainer.add(gBox2);



        /**
         * Un extrat pour la fin
         */

        let gDeadtree=this.add.image(2000,450,'gDeadtree').setOrigin(0,0);
        gDeadtree.scale=1.4
        gDeadtree.angle=-110
        this.groundContainer.add(gDeadtree);

        let gFallen=this.add.image(1320,280,'gFallen').setOrigin(0,0);
        gFallen.angle=3
        this.groundContainer.add(gFallen);

        let gBigstone=this.add.image(2250,350,'gBigstone').setOrigin(0,0);
        this.groundContainer.add(gBigstone);




        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterblood1'},
                {key:'filterblood2'},
                {key:'filterblood3'},
            ],
            frameRate:24,
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
        this.cameras.main.setBounds(0, 0, 5000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=1.5;
        this.bg1Container.scrollFactorX=1.6;
        this.groundContainer.scrollFactorX=2;
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
