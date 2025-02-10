export const natsOctave = ["c", "d", "e", "f", "g", "a", "b"]
export const sharpsOctave = ["c#", "d#", "f#", "g#", "a#"]
export const fullOctave = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]
export const numOctaves = 7
let audiocontext: AudioContext | null = null;

export function getAudioContext() {
    if (audiocontext == null) {
        console.log("Creating new audio context.")
        audiocontext = new window.AudioContext()
    }
    return audiocontext;
}
