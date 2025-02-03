import SharpKey from "@/components/SharpKey";
import NatKey from "@/components/NatKey";

export default function Key({note, octave, className = ""} : {note : string, octave : number, className : string}) {

    return note.includes("#") ? (
        <SharpKey note={note} octave={octave} className={className}/>
    ) : (
        <NatKey note={note} octave={octave} className={className}/>
    )
}