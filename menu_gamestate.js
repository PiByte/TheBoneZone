class Menu
{
    constructor()
    {
        this.__NAME = "menu";

        console.log("Press SPACE to start the game!");

    }

    onUpdate()
    {
        console.log("Updating,", this.__NAME);

        Engine.draw(LOL);

        Engine.render();

        if (keyIsDown(32))
        {
            State.changeState("game");
        }
    }

    onChange()
    {
        console.log("Changed to", this.__NAME);
    }

}