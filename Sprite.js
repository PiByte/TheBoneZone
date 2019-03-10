/*
Sprite manager
will handle sprites.
will be able to draw them to screen
you will also be able to manipulate them in various ways
*/

// Ammunitionen tog slut till sist, nu kan ni kalla mig för Sundance Kid.
// The ammunition finally ran out, you can now call me the Sundance Kid.

var THIS = this;

class Sprite
{
    constructor(x, y, img, tag, sheet = false, tileWidth = 16, tileHeight = 16) // Sprite
    {
        this.x = x; // should be accessable
        this.y = y;
        this.tag = tag;

        // animation stuff
        this.__SHEET = sheet;
        this.__TILEWIDTH = tileWidth;
        this.__TILEHEIGHT = tileHeight;

        this.__CURRENT_FRAME = 0; // current animation frame. This must change at the rate described by this.__FPS
        this.__CURRENT_SEQUENCE_FRAME = 0;
        this.__MAX_FRAME = undefined;
        this.__CURRENT_SEQUENCE = [];
        this.__IS_PLAYING = false;
        this.__LOOP = false;

        // fps thingies - these are for the timings of the animations
        this.__FPS = 60; // default value
        this.__NOW = Date.now();
        this.__THEN = Date.now();
        this.__INTERVAL = 1000/60;
        this.__DELTA = 0;

        this.__IMG = [];

        // create img array if sheet = true, else just set sprite to img
        if (this.__SHEET)
        {
            var x, y;
            var columns = Math.floor(img.width / this.__TILEWIDTH);
            var rows = Math.floor(img.height / this.__TILEHEIGHT);

            for (y = 0; y < rows; ++y)
            {
                for (x = 0; x < columns; ++x)
                {
                    this.__IMG[y * columns + x] = img.get( x * this.__TILEWIDTH, y * this.__TILEHEIGHT, this.__TILEWIDTH, this.__TILEHEIGHT ); // p5.js, will bascially just split the sprite sheet into its seperate sprites and store them in an array
                }
            }
        }
        else
            this.__IMG[0] = img;
    }

    // to be added at some point

    playAnimation(sequence, loop, fps) // void
    {

        if (!this.__SHEET)
        {
            console.error("This sprite doesn't contain a spritesheet!");
            return;
        }

        if (this.__IS_PLAYING)
        {
            // check sequence
            if (sequence.toString() !== this.__CURRENT_SEQUENCE.toString())
            {
                // new animation
                this.__IS_PLAYING = true;
                this.__CURRENT_FRAME = 0;
                this.__CURRENT_SEQUENCE_FRAME = 0;
                this.__MAX_FRAME = sequence.length - 1;
                this.__LOOP = loop;
                this.__CURRENT_SEQUENCE = sequence;
                this.__INTERVAL = 1000/fps;
            }

            this.__NOW = Date.now();
            this.__DELTA = this.__NOW - this.__THEN;

            if (this.__DELTA > this.__INTERVAL)
            {
                this.__CURRENT_FRAME = this.__CURRENT_SEQUENCE[this.__CURRENT_SEQUENCE_FRAME]; // this took a while to get right

                if (this.__CURRENT_SEQUENCE_FRAME === this.__MAX_FRAME)
                {
                    this.__CURRENT_SEQUENCE_FRAME = 0;

                    if (!this.__LOOP)
                    {
                        this.__CURRENT_SEQUENCE = [];
                        this.__IS_PLAYING = false;
                    }
                }
                else
                {
                    this.__CURRENT_SEQUENCE_FRAME++;
                }

                this.__THEN = this.__NOW - (this.__DELTA % this.__INTERVAL);
                
            }

            // advance to next frame and stuff
        }
        else
        {
            // start new animation
            this.__IS_PLAYING = true;
            this.__CURRENT_FRAME = 0;
            this.__CURRENT_SEQUENCE_FRAME = 0;
            this.__MAX_FRAME = sequence.length - 1;
            this.__LOOP = loop;
            this.__CURRENT_SEQUENCE = sequence;
            this.__INTERVAL = 1000/fps;

        }

    }
    
    stopAnimation(frame = -1) // void
    {
        if (this.__SHEET && this.__IS_PLAYING)
        {
            this.__CURRENT_SEQUENCE = [];
            
            if (frame === -1) // reset to either the default frame or frame of your choosing
                this.__CURRENT_FRAME = 0;
            else
                this.__CURRENT_FRAME = frame;
        }
        else
            console.error("This sprite either doesn't contain a spritesheet, or isn't currently being animated");
    }


    setFrame(frame) // void
    {
        if (this.__SHEET && !this.__IS_PLAYING)
        {
            this.__CURRENT_FRAME = frame;
        }
        else
            console.error("This sprite either doesn't contain a spritesheet, or is currently being animated");
    } 

    // add more functions along the way when you're implementing this, i guess

    /* PRIVATES */

    __DRAW(buffer) // void
    {
        // this is awful
        // draw to buffer (defined in TDZ.js)

        buffer.image(this.__IMG[this.__CURRENT_FRAME], this.x, this.y); // p5js
    }    
}