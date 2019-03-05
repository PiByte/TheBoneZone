/*
Audio engine
Will take care of audio
Will also be able to generate waveforms, because why not

this will be mostly handled by p5.sound for now
if we write our own audio library, then it will replace p5.sound
*/

class Audio
{
    constructor() // Audio
    {
        this.__IS_PLAYING = false;
        // create oscillator
    }

    playAudio(file, loop = false)
    {
        // plays audio
    }

    stopAudio() // void
    {
        // stops the current audio stream
    }

    playSFX(file) // void
    {
        // plays sound effect over the main audio stream. can also be layered (ie several sound effects can be played at once)
    }

    createTone(type, length, freq) // void
    {
        // todo, might be changed in future
    }

    isPlaying() { return this.__IS_PLAYING; } // bool

}