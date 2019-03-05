class Game
{
    constructor()
    {
        this.__NAME = "game";

        this.player_speed = 2;
        // this will run when an instance of this class is created
    }

    update()
    {
        // this will run every frame

        console.log("drawing");

        Engine.draw(Thang); // players will hopfully be defined in the classes they belong to instead of the main file
        Engine.draw(Skull);
        Engine.draw(Player);
        

        if (keyIsDown(UP_ARROW)) { Player.y -= this.player_speed; } // up
        if (keyIsDown(DOWN_ARROW)) { Player.y += this.player_speed; } // down
        if (keyIsDown(LEFT_ARROW)) { Player.x -= this.player_speed; } // left
        if (keyIsDown(RIGHT_ARROW)) { Player.x += this.player_speed; } // right

        if (this.touching(Player.x, Player.y, 16, 32, Skull.x, Skull.y, 16, 16))
        {
            Skull.x = Math.floor(Math.random() * 400);
            Skull.y = Math.floor(Math.random() * 400); 
        }

        // render
        Engine.render();
    }

    touching(x1, y1, w1, h1, x2, y2, w2, h2)
    {
        return x1 < x2+w2 && x2 < x1+w1 && y1 < y2+h2 && y2 < y1+h1;
    }

    onChange()
    {
        console.log("Changed to", this.__NAME);

        // this will run when the state manager changes to this game state
    }

}