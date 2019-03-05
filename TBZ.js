/*
Main file,
handles all of the boring stuff, like setting up engine, and basic drawing, and "page flipping"
Called first, i guess
*/

class BoneZone
{
    constructor(width, height, fps = 60) // BoneZone
    {
        // create constants
        this.__WIDTH = width;
        this.__HEIGHT = height;
        this.__FPS = fps;
        this.__FRAMEBUFFER = createGraphics(this.__WIDTH, this.__HEIGHT); // framebuffer (should maybe be changed to an array)

        this.__BG_COLOR = 92;

        // p5.js functions
        createCanvas(this.__WIDTH, this.__HEIGHT); // main canvas
        background(this.__BG_COLOR);
        frameRate(this.__FPS);
    }

    draw(obj)
    {
        // will draw an object to class
        // takes an instance of something (that something must include a __DRAW() function)
        // the framebuffer is passed in order for this function to access it, which is horrible. I don't know how you would do otherwise though.

        if (typeof obj.__DRAW === "function") // check if function exists
            obj.__DRAW(this.__FRAMEBUFFER);
    }

    render() // void
    {
        // will copy frame buffer onto main canvas
        image(this.__FRAMEBUFFER, 0, 0); // p5js
        this.__FRAMEBUFFER.background(this.__BG_COLOR);
    }

    setFPS(fps) // void
    {
        this.__FPS = fps;
        frameRate(this.__FPS);
    }

    setWidth(width) // int
    {
        this.__WIDTH = width;
        // change canvas here?
    }

    setHeight(height) // int
    {
        this.__HEIGHT = height;
        // a new canvas will have to be created
    }

    getFPS() { return this.__FPS; } // int
    getWidth() { return this.__WIDTH; } // int
    getHeight() { return this.__HEIGHT; } // int

    /* PRIVATE */
    
    __REFRESH_CANVAS()
    {
        // create new canvas
    }
}