/*
Input
This will take care of the input methods
Those include:
- keyboards
- mice
- gamepads
thats it

writes to vector?
when the letter a (ascii character 65) is pressed, a value should be written to position 65 in a vector (array)
another part of the game can then check if a value has been written to that position

*/

class Input
{
    constructor() // input
    {
        // vectors
        this.keys = new Array(0xFF); // Creating an array with a length of 255
        this.mouse = new Array(3); // Only three buttons. No more button for you >:(

    }

    getMouseX() { return mouseX; /* p5.js */ } // int
    getMouseY() { return mouseY; /* p5.js */ } // int
    
    checkForInput() // void
    {
        // Keyboard
        if (keyIsPressed) // idk if this supports several keys being pushed down
            this.keys[keyCode] = true;
        else
            this.keys = new Array(0xFF); // probably not a good idea, might be good to instead keep track of the keys that were pushed in a seperate array.

        // Mouse
        
        /*
        if (mouseIsPressed)
        {
            
        }*/

        // Controller
        // todo ????
    }

    /* PRIVATE */

    
}