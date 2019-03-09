/*
Sprite manager
will handle sprites.
will be able to draw them to screen
you will also be able to manipulate them in various ways
*/

/*
TODO:

ADD BACK __IS_PLAYING!!

*/

class Sprite
{
    constructor(x, y, img, tag, sheet = false, tileWidth = 16, tileHeight = 16, defaultFrame = 0) // Sprite
    {
        this.x = x; // should be accessable
        this.y = y;
        this.tag = tag;

        // animation stuff
        this.__SHEET = sheet;
        this.__TILEWIDTH = tileWidth;
        this.__TILEHEIGHT = tileHeight;
        this.__DEFAULT_FRAME = defaultFrame;

        this.__CURRENT_FRAME = defaultFrame; // current animation frame. This must change at the rate described by this.__FPS
        this.__CURRENT_SEQUENCE = [];
        this.__ANIMATION_TIMER = null;


        // create img array if sheet = true, else just set sprite to img
        if (this.__SHEET)
        {
            this.__IMG = [];

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
            this.__IMG = img;
    }

    // to be added at some point

    playAnimation(sequence, loop, fps) // void
    {
        // Suggestion: get rid of all clearintervals and just never stop the timer??

        // requestAnimationFrame or setInterval ?????
        if (!this.__SHEET)
        {
            console.error("This sprite doesn't contain a spritesheet");
            return;
        }

        if (this.__CURRENT_SEQUENCE.length !== 0)
        {
            if (this.__CURRENT_SEQUENCE.toString() == sequence.toString()) // dont judge too hard. apparently you can't compare arrays in js, which is dumb, but ok
                return;
            
            if (this.__ANIMATION_TIMER)
                clearInterval(this.__ANIMATION_TIMER);
        }
            //return; // return if already playing. no need to keep restarting    
        //clearInterval(__THIS.__ANIMATION_TIMER); // stop animation if one is already running

        this.__CURRENT_SEQUENCE = sequence;

        var sequenceFrame = 0; // where in the sequence we are
        var maxSequenceFrame = sequence.length - 1;

        var __THIS = this; // redefining so that "this" can be accessed from within the scope of setInterval

        this.__ANIMATION_TIMER = setInterval(function()
        {
            __THIS.__CURRENT_FRAME = sequence[sequenceFrame];

            if (sequenceFrame === maxSequenceFrame)
            {
                // reset
                sequenceFrame = 0;

                if (!loop)
                {
                    __THIS.__CURRENT_SEQUENCE = [];
                    clearInterval(__THIS.__ANIMATION_TIMER);
                }
            }
            else
                sequenceFrame++;

        }, 1000 / fps);

    }
    
    stopAnimation(frame = -1) // void
    {
        if (this.__SHEET && this.__CURRENT_SEQUENCE.legnth != 0)
        {
            clearInterval(this.__ANIMATION_TIMER);
            this.__CURRENT_SEQUENCE = [];
            
            if (frame === -1) // reset to either the default frame or frame of your choosing
                this.__CURRENT_FRAME = this.__DEFAULT_FRAME;
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
        
        // temp, will at the moment just draw image
        if (this.__SHEET)
        {
            buffer.image(this.__IMG[this.__CURRENT_FRAME], this.x, this.y); // p5js
        }
        else
            buffer.image(this.__IMG, this.x, this.y); // p5js
    }    
}