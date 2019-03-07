/*
Tilemap loader.
This will draw a tilemap onto the screen
It will also return a collision map, so that the player can't go through walls and stuff
*/

/*
Like the gamestates, tilemap will also require some stuff like:
- three layers:
    - the actual map
    - collision map
    - entites

*/

class Tilemap
{
    constructor(data, tilesheet, tileWidth, tileHeight) // Tilemap
    {
        this.__DATA = data;
        this.__TILESHEET = tilesheet;
        this.__TILEWIDTH = tileWidth;
        this.__TILEHEIGHT = tileHeight;

        // Entities should be defined here? (!!!)
        this.__ENTITIES = [];
    }

    getEntites() // return sprite object(s) containing stuff like cordinates, sprite etc?
    {

    }

    setTile(x, y, layer, newID) // void
    {
        // sets tile id
    }

    getTile(x, y, layer) // int
    {
        // gets id
    }

    /* PRIVATE */
    
    __DRAW(buffer) // void
    {
        // draws map to screen
        // should maybe be retricted to only what the camera is seeing so we're not drawing the entire map, when you can only a fraction of it
        // ^^^^
    }
}