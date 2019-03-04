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

        // p5.js functions
        createCanvas(this.__WIDTH, this.__HEIGHT); // main canvas
        frameRate(this.__FPS);
    }

    renderFrame() // void
    {
        // will copy frame buffer onto main canvas
    }

    /* OTHER */

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

    getFPS() // int
    { return this.__FPS; }

    getWidth() // int
    { return this.__WIDTH; }

    getHeight() // int
    { return this.__HEIGHT; }

    /* PRIVATE */
    
    __REFRESH_CANVAS()
    {
        // create new canvas
    }

    __DRAW(img)
    {
        // will draw an image object to framebuffer
    }
}