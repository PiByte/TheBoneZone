var Engine;
var State;
var Inputmanager;

var Graphics = [];
var Player, Skull;

var MainMapOneData;


function preload()
{
    // load graphics into array

    Graphics[0] = loadImage("spritesheet.png");
    Graphics[1] = loadImage("skull.png");
    Graphics[2] = loadImage("thang.png");
    Graphics[3] = loadImage("lol.png");
    Graphics[4] = loadImage("basictiles.png");

    MainMapOneData = loadStrings("MAINMAPONE.txt", function()
    {
        MainMapOneData = MainMapOneData[0].split(",");
    
        var i; // temp
        for (i = 0; i < MainMapOneData.length; ++i)
        {
            MainMapOneData[i] = parseInt(MainMapOneData[i]);
        }
    });


}

function setup()
{
    Engine = new BoneZone(500, 500);
    State = new Statemanager();
    Inputmanager = new Input();

    MainMapOne = new Tilemap(MainMapOneData, Graphics[4], 16, 16);

    Player = new Sprite(150, 150, Graphics[0], "player", true, 16, 16, 1);
    Skull = new Sprite(200, 200, Graphics[1], "skull"); // this should appear in the preload of the gamestates in the future
    Thang = new Sprite(10, 10, Graphics[2], "thang");
    LOL = new Sprite(10, 10, Graphics[3], "LOL"); // will be ui object when the UI library is complete

    // adding game states to statemanager
    State.addState(new Menu());
    State.addState(new Game());

    State.changeState("menu");
}

function draw()
{
    Inputmanager.checkForInput();
    State.update();
}