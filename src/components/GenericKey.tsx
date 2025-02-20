import {ReactNode, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {getAudioContext, loadInstrument} from "@/lib/audio";

export default function GenericKey({note, octave = 4, className, children}: {
    note: string,
    octave: number,
    className: string,
    children: ReactNode
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
    }
    const onRelease = () => {
        instrument?.stop(getAudioContext()?.currentTime + 0.05)
    }
    return (
        <div>
            <div className={cn(className, "select-none")} onMouseDown={onClick} onMouseUp={onRelease}
                 onMouseLeave={onRelease} onTouchStart={onClick} onTouchEnd={onRelease} onTouchCancel={onRelease}>{children}</div>
        </div>
    )
}