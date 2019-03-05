var Engine;
var Statemanager;
var Inputmanager;

var Graphics = [];
var Player, Skull;

function preload()
{
    // load graphics into array

    Graphics[0] = loadImage("player.png");
    Graphics[1] = loadImage("skull.png");
    Graphics[2] = loadImage("thang.png");
    Graphics[3] = loadImage("lol.png");
}

function setup()
{
    Engine = new BoneZone(500, 500);
    Statemanager = new State();
    Inputmanager = new Input();

    Player = new Sprite(0, 0, Graphics[0]);
    Skull = new Sprite(200, 200, Graphics[1]); // this should appear in the preload of the gamestates in the future
    Thang = new Sprite(10, 10, Graphics[2]);
    LOL = new Sprite(10, 10, Graphics[3]); // will be ui object when the UI library is complete

    // adding game states to statemanager
    Statemanager.addState(new Menu());
    Statemanager.addState(new Game());

    Statemanager.changeState("menu");
}

function draw()
{
    Inputmanager.checkForInput();
    Statemanager.getCurrentState().update();
}