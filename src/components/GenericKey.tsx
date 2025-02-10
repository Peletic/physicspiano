import {ReactNode, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {decoder, getAudioContext, getSoundFont} from "@/lib/audio";

export default function GenericKey({note, octave = 4, className, children}: {
    note: string,
    octave: number,
    className: string,
    children: ReactNode
}) {
    const [instrument, setInstrument] = useState();
    useEffect(() => {
        initInstrument()
    }, [])

    const initInstrument = async () => {
        console.log(`Creating ${note}:${octave}.`)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        loadAudio(getSoundFont(), {decode: decoder(), ready: () => {return null}}).then(buffers => {
            setInstrument(window.SamplePlayer(getAudioContext(), buffers).connect(getAudioContext()?.destination))
        });

    }
    const onClick = () => {
        if (instrument === undefined) {
            initInstrument()
        }
        instrument?.start(note.toUpperCase() + octave, undefined, {sustain: 3, decay: 2})
    }
    const onRelease = () => {
        instrument?.stop(getAudioContext()?.currentTime + 0.05)
    }
    return (
        <div>
            <div className={cn(className, "select-none")} onMouseDownCapture={onClick} onMouseUp={onRelease}
                 onMouseLeave={onRelease}>{children}</div>
        </div>
    )
}