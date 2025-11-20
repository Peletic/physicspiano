import { useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {getAudioContext, loadInstrument} from "@/lib/audio";

// @ts-ignore
export default function GenericKey({text, setText, note, octave = 4, className, children}: {
    note: string,
    octave: number,
    className: string,
    children: string,
    setText: any,
    text: any
}) {
    const [instrument, setInstrument] = useState<any>();
    useEffect(() => {
        console.log(`Creating ${note}:${octave}.`)
        loadInstrument().then(res => setInstrument(res))
    }, [])


    const onClick = async () => {
        if (instrument === undefined) {
            console.log(`Creating ${note}:${octave}.`)
            setInstrument((await loadInstrument()));
        }
        instrument?.start(note.toUpperCase() + octave, undefined, {sustain: 3, decay: 2})
        setText(text + "onClick")
    }
    const onRelease = async () => {
        if (instrument === undefined) {
            getAudioContext()
        }
        instrument?.stop(getAudioContext()?.currentTime + 0.05)
    }
    return (
        <div>
            <button className={cn(className, "select-none active:bg-blue-400 cursor-pointer")}
                 onMouseDown={onClick} onMouseUp={onRelease} onMouseLeave={onRelease}
                 onTouchStart={onClick} onTouchEnd={onRelease} onTouchMove={onRelease}
                 onTouchStartCapture={onClick} onTouchEndCapture={onRelease} onTouchMoveCapture={onRelease}
            >{`${children}`}</button>
        </div>
    )
}