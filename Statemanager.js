/*
Game statemanager
Will manage all of the gamestates
Thats about it

all gamestates will have to a few required functions and varibles in them

these things have to be defined:
- update() (executed each frame)
- __NAME (name of gamestate)
- onChange() (will be called when the state has been changed)

*/

class Statemanager
{
    constructor() // Statemanager
    {
        this.__STATES = [];
        this.__CURRENT_STATE = -1; // negative value at the moment, since there are no states
    }

    addState(state) // void
    {
        // check if an actual state has been passed

        if (this.__CURRENT_STATE === -1)
            this.__CURRENT_STATE = 0; // set to default value
        
        this.__STATES.push(state);
    }

    removeState(name) // void
    {
        // todo
    }

    clearStates() // void
    {
        this.__STATES = [];
        this.__CURRENT_STATE = -1;
    }

    changeState(name) // void
    {
        var newID = this.__FIND_STATE_NAME(name);
        this.__CURRENT_STATE = newID;

        this.__STATES[this.__CURRENT_STATE].onChange();
    }

    update() // void
    {
        // Update class
        this.__STATES[this.__CURRENT_STATE].onUpdate();
    }

    getCurrentState() // instance of a class
    {
        return this.__STATES[this.__CURRENT_STATE];
    }

    getCurrentStateName() // string
    {
        return this.__STATES[this.__CURRENT_STATE].__NAME;
    }

    setStateName(oldName, newName) // void
    {
        var ID =  __FIND_STATE_NAME(oldName);
        this.__STATES[ID].__NAME = newName;
        // change the name of one of the states
    }

    /* PRIVATE */

    __FIND_STATE_NAME(name) // int
    {
        // this function will return the id of the state bearing the name that is passed to the function

        var i;
        for (i = 0; i < this.__STATES.length; ++i)
        {
            // check for name
            if (this.__STATES[i].__NAME == name)
            {
                return i;
            }
        }

        return -1; // return negative value if no state was found
        
    }
}