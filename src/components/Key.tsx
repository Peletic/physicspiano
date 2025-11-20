import SharpKey from "@/components/SharpKey";
import NatKey from "@/components/NatKey";

// @ts-ignore
export default function Key({setText, text, note, octave, className = " select-none"} : {note : string, octave : number, className : string, setText: any,
    text: string}) {

    return note.includes("#") ? (
        <SharpKey setText={setText} text={text} note={note} octave={octave} className={className}/>
    ) : (
        <NatKey setText={setText} text={text} note={note} octave={octave} className={className}/>
    )
}