class Menu
{
    constructor()
    {
        this.__NAME = "menu";

        console.log("Press SPACE to start the game!");

    }

    update()
    {
        console.log("Updating,", this.__NAME);

        Engine.draw(LOL);

        Engine.render();

        if (Inputmanager.keys[32])
        {
            Statemanager.changeState("game");
        }
    }

    onChange()
    {
        console.log("Changed to", this.__NAME);
    }

}