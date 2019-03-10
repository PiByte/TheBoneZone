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

/*
ACTUAL LAYOUT OF DATA
Data[0] = width
Data[1] = height
Data[2] = layer count (atleast 2 layers, this includes the collision map as well!!)
Data[3] - Data[...] = data

The collision layer is ALWAYS the last layer
*/

class Tilemap
{
    constructor(data, img, tileWidth = 16, tileHeight = 16) // Tilemap
    {
        if (data[0] * data[1] * data[2] !== data.length - 3)
        {
            console.error("Incorrect tilemap size!"); // reject map if the lengths don't add up
            return;
        }
        
        this.__TILEWIDTH = tileWidth;
        this.__TILEHEIGHT = tileHeight;

        this.__MAPWIDTH = data[0];
        this.__MAPHEIGHT = data[1];
        this.__LAYER_COUNT = data[2] - 1; // minus one, because we cant include the collision map

        this.__LAYERS = [];
        this.__COLLISION_MAP = [];

        // x, y, camera, view, (AAAA)
        this.x = 0;
        this.y = 0;

        // splitting and compiling tiles into a single array
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

        // extract layers and collision map

        var layer, i;
        var tilesPerLayer = this.__MAPHEIGHT * this.__MAPWIDTH;

        for (layer = 0; layer < this.__LAYER_COUNT; ++layer)
        {
            var layerData = [];

            for (i = 0; i < tilesPerLayer; ++i)
            {
                layerData[i] = data[layer * tilesPerLayer + i + 3];
            }

            this.__LAYERS.push(layerData);
        }

        // collision map
        for (i = 0; i < tilesPerLayer; ++i)
        {
            this.__COLLISION_MAP[i] = data[this.__LAYER_COUNT * tilesPerLayer + i + 3];
        }
    }

    setTile(x, y, layer, newID) // void
    {
        // sets tile id
    }

    getTile(x, y, layer) // int
    {
        // gets id
    }

    // TODO: add some functions that relate to the collision map

    /* PRIVATE */
    
    __DRAW(buffer) // void
    {
        // draws map to screen
        // should maybe be retricted to only what the camera is seeing so we're not drawing the entire map, when you can only a fraction of it
        // ^^^^

        // draw layers

        // TODO: Make it so this only render the section of the map that the canvas is currently displaying
        

        var layer, Xtile, Ytile;

        var buf = 16;

        for (layer = 0; layer < this.__LAYER_COUNT; ++layer)
        {
            for (Ytile = 0; Ytile < this.__MAPHEIGHT; ++Ytile)
            {
                for (Xtile = 0; Xtile < this.__MAPWIDTH; ++Xtile)
                {

                    var Xpos = this.x + Xtile * this.__TILEWIDTH;
                    var Ypos = this.y + Ytile * this.__TILEHEIGHT

                    // we dont want to render the tiles if they're offscreen, so i've added this in order to make sure that doesn't happen

                    // x   y    w    h
                    // 50, 100, 150, 200
                    

                    if (Xpos > 150 + 50) // width
                        continue;
                    
                    if (Ypos > 200 + 100) // height
                        continue;

                    if (Ypos < 100 - buf) // 0
                        continue;

                    if (Xpos >= 50 - buf) // 0
                    {
                        var tile = this.__LAYERS[layer][Ytile * this.__MAPWIDTH + Xtile]; // get the id for the current tile that we're drawing

                        buffer.image(this.__IMG[tile], Xpos, Ypos);
                    }
                }
            }
        }

    }
}