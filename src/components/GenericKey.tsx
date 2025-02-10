import {ReactNode, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {Player} from "soundfont-player";
import * as Soundfont from "soundfont-player";
import {getAudioContext} from "@/lib/audio";




export default function GenericKey({note, octave=4, className, children}: {note : string, octave : number, className : string, children : ReactNode}) {
    const [instrument, setInstrument] = useState<Player>();
    useEffect(() => {
        initInstrument()
    }, [])
    const initInstrument = () => {
        Soundfont.instrument(getAudioContext(), "acoustic_grand_piano", {nameToUrl: () => "/soundfont/acoustic_grand_piano-mp3.js"}).then(function (player) {
            console.log(`Creating ${note}:${octave}.`)
            setInstrument(player);
        })
    }
    const onClick = () => {
        if (instrument === undefined) {
            initInstrument()
        }
        instrument?.start(note.toUpperCase()+octave, undefined, {sustain: 3, decay: 2})
    }
    const onRelease = () => {
        instrument?.stop(getAudioContext()?.currentTime + 0.05)
    }
    return (
        <div>
            <div className={cn(className)} onMouseDown={onClick} onMouseUp={onRelease} onMouseLeave={onRelease}>{children}</div>

        </div>
    )
}