/*
Sprite manager
will handle sprites.
will be able to draw them to screen
you will also be able to manipulate them in various ways
*/

class Sprite
{
    constructor(x, y, img, animated = false, tileWidth = 16, tileHeight = 16) // Sprite
    {
        this.x = x; // 
        this.y = y;


        this.__IMG = img;
        this.__ANIMATED = animated;
        this.__TILEWIDTH = tileWidth;
        this.__TILEHEIGHT = tileHeight;
        this.__ANIMATION_SEQUENCES = []; // Animation sequences will be stored here (as arrays, this is a two-dimensional array)
        this.__CURRENT_ANIMATION_SEQUENCE = -1; // contains id

        this.__CURRENT_FRAME = 0; // current animation frame. This must change at the rate described by this.__FPS
    }


    // to be added at some point

    playAnimation(sequence, loop, fps) {} // void
    stopAnimation() {} // void

    // add more functions along the way when you're implementing this, i guess

    /* PRIVATES */

    __DRAW(buffer) // void
    {
        // draw to buffer (defined in TDZ.js)
        
        // temp, will at the moment just draw image
        buffer.image(this.__IMG, this.x, this.y); // p5js
    }    
}